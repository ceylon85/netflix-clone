import React, { useEffect, useState } from "react";
import "./PlanScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, subscribe } from "../features/userSlice";
import db from "../firebase";

function PlanScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    db.collection("products")
      .where("active", "==", true)
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
  return (
    <div className="planScreen" key={user.id}>
      {Object.entries(products).map(([productId, productData]) => {
        //사용자의 구독이 활성화 상태인지 확인
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(user.subscription?.role.toLowerCase());
        return (
          <div className="planScreen__plan">
            <div className="planScreen__name" key={productId}>
              <p>{productData.name}</p>
              <small>{productData.description}</small>
            </div>
            <button
              className={isCurrentPackage ? "plan__current" : "plan__subscribe"}
              onClick={() =>
                !isCurrentPackage //&& loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
