import React, { useEffect, useState } from "react";
import "./PlanScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, subscribe } from "../features/userSlice";
import db from "../firebase";
import { loadStripe } from "@stripe/stripe-js";
import Loader from 'react-loader-spinner';

function PlanScreen() {
  const [products, setProducts] = useState([]);
  //const [subscription, setSubscription] = useState(null);

  const [loading, setLoading] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //요금제 가져오기
  useEffect(() => {
    db.collection("products")
      .orderBy("name")
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
        setLoading(false);
      });
  }, []);

  console.log(products);
  //console.log(subscription);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          dispatch(
            subscribe({
              role: subscription.data().role,
              current_period_end: subscription.data().current_period_end
                .seconds,
              current_period_start: subscription.data().current_period_start
                .seconds,
            })
          );
        });
      });
  }, [user.uid, dispatch]);

  const loadCheckout = async (priceId) => {
    setLoading(true);
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    //window.location.origin: 프로토콜 + URL도메인 + 포트

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        // 고객에게 오류를 보여주고
        // firebase console 에서 cloud function log 를 검사
        alert(`An error occured: ${error.message}`);
        setLoading(false);
      }

      if (sessionId) {
        // Checkout으로 redirect / Init Stripe
        const stripe = await loadStripe(
          "pk_test_51IgRIIIHj2z6uFigo2WvXfUG7WeXNbU96ooHpsiUG7BLI6ThO1sz1fVTZV9WOnVONfVeUDN9h52pJYfZg68mnIFB00rNYl4k2W"
        );
        stripe.redirectToCheckout({ sessionId });
        setLoading(false);
      }
    });
  };

  return (
    <div className="planScreen" key={user.id}>
      {loading ? (
        <div className="planScreen__loader">
          <Loader type="TailSpin" color=" #e50914" height={200} width={200} />
        </div>
      ) : (
        <>
          <div className="planScreen__table">
            <h4 className="planScreen__tablename">{""}</h4>
            <h4 className="planScreen__resolution">해상도</h4>
            <h4 className="planScreen__quality">영상 화질</h4>
            <h4 className="planScreen__price">월 요금</h4>
            <h4>{""}</h4>
          </div>
          {Object.entries(products).map(([productId, productData]) => {
            //사용자의 구독이 활성화 상태인지 확인
            const isCurrentPackage = productData.role
              ?.toLowerCase()
              .includes(user.subscription?.role.toLowerCase());
            return (
              <div
                key={productId}
                className={`${
                  isCurrentPackage && "planScreen__plan--disabled"
                } planScreen__plan`}
              >
                <div className="planScreen__name">
                  <h4>{productData.name}</h4>
                </div>
                <div className="planScreen__resolution">
                  <h5>{productData.description}</h5>
                </div>

                <div className="planScreen__quality">
                  <h5>{productData.quality}</h5>
                </div>

                <div className="planScreen__price">
                  <h5>{productData.price}</h5>
                </div>
                <button
                  className={
                    isCurrentPackage
                      ? "planScreen__current"
                      : "planScreen__subscribe"
                  }
                  onClick={() =>
                    !isCurrentPackage &&
                    loadCheckout(productData.prices.priceId)
                  }
                >
                  {isCurrentPackage ? "현재 멤버십" : "신청"}
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default PlanScreen;
