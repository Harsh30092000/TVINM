var firebaseConfig = {
  apiKey: "AIzaSyByqqDyBWAiUFq0_nhdSnjKpHk78d7AVas",
  authDomain: "formk-8547e.firebaseapp.com",
  projectId: "formk-8547e",
  storageBucket: "formk-8547e.appspot.com",
  messagingSenderId: "972787506901",
  appId: "1:972787506901:web:e9e3417796b3957e334c5c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//database intergration
function addtodb() {
  console.log("In add");

  const db = firebase.firestore();
  const name_ = memberName.value;
  const dob_ = document.querySelector("#dob").value;
  const bloodg_ = document.querySelector("#bloodg").value;
  const gender_ = document.querySelector("#gender").value;
  const father_ = document.querySelector("#father-name").value;
  const mother_ = document.querySelector("#mother-name").value;
  const address_ = document.querySelector("#address").value;
  const phone_ = phone.value;
  const aadhar_ = document.querySelector("#aadhar").value;
  const email_ = email.value;
  const position_ = document.querySelector("#position").value;

  // const ref = firebase.storage().ref();
  // const file = document.querySelector("#formFile").files[0];
  // const name = +new Date() + "-" + file.name;
  // const metadata = {
  //   contentType: file.type,
  // };
  // const task = ref.child(name).put(file, metadata);
  // task
  //   .then((snapshot) => snapshot.ref.getDownloadURL())
  //   .then((url) => {
  //     console.log(url);
  //     //   document.querySelector('#someImageTagID').src = url;
  //   })
  //   .catch(console.error);

  console.log(
    name_,
    dob_,
    bloodg_,
    gender_,
    father_,
    mother_,
    address_,
    phone_,
    aadhar_,
    email_,
    position_
  );

  const ref = firebase.storage().ref();
  const file = document.querySelector("#formFile").files[0];
  const name = +new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type,
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      console.log(url);
      //document.querySelector("#someImageTagID").src = url;
      db.collection("members").doc(aadhar_).set({
        name: name_,
        dob: dob_,
        blood: bloodg_,
        gender: gender_,
        father: father_,
        mother: mother_,
        address: address_,
        phone: phone_,
        aadhar: aadhar_,
        email: email_,
        position: position_,
        image: url,
      });
    })
    .catch(console.error);
}
