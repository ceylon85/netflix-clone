# **`react-Netflix-Clone`**
React Netflix clone web site
#
### `Firebase deploy`
### Link to ***[View](https://reactnetflixclone-d1bc4.web.app)***
#
### `Main Tech Stack`
React, Redux, React-Router  
Axios: Fetch from TMDB  
Firebase: 
- Deployed to Firebase
- FireStore as DB
- Authentication with Firebase
- Use Stripe payment from firebase Extension   
      
Icon: react-fontAwesome   


#
## `Main Dir Structure` 
- src
    - `Screens`: Home, SignUp, Login, Profile Screen
    - `Footer`: footer section
    - `userSlice.js` && `store.js`: Redux-toolkit
    - `Requests.js`: API && fetch Movie_Data
    - `firebase.js`: firebase 구성
#
## `Main Feature`
test_Id : test101@gmail.com   
test_Pw : 123456

### `1.Login` 
![ezgif com-gif-maker](https://user-images.githubusercontent.com/45006553/116504246-d55b1400-a8f2-11eb-853d-cf5731d51853.gif)
#
### `2.HomeScreen`
![home](https://user-images.githubusercontent.com/45006553/116504291-eefc5b80-a8f2-11eb-8ee5-ab5a78a5e2b3.gif)
#
### `3.Account page`

![account1](https://user-images.githubusercontent.com/45006553/116503682-aabc8b80-a8f1-11eb-8707-225ae985fcf4.gif)

![account2](https://user-images.githubusercontent.com/45006553/116503744-cc1d7780-a8f1-11eb-8150-ef95aef836bb.gif)

#
### `4.DB(FireStore)`
![firebaseDB](https://user-images.githubusercontent.com/45006553/116506811-ffafd000-a8f8-11eb-84c7-6c8bb6a7dae4.gif)

#
### `5.Stripe`
  Firebase Extension 을 통해 사용   
  ![Stripe_payment](https://user-images.githubusercontent.com/45006553/116507032-777dfa80-a8f9-11eb-90fb-f05182f4fd9a.gif)
#
## `Issue`
`문제`   
페이지 이동시 스크롤이 변경 된 상태로 있음 상태

`해결`   
 ScrollToTop.js 를 만들어 페이지가 렌더링 될 때마다 Scroll의 값을 (0,0)으로 고정시켰다.
 
```js
//페이지 렌더링 시 스크롤을 가장 상단에 고정
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
```
위치는 App.js에 있는 Router 아래에 위치시킴


