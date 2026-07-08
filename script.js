// IMPORT FIREBASE

import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    updateDoc,
    doc
}
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


// CONFIGURAZIONE FIREBASE

const firebaseConfig = {

    apiKey: "AIzaSyBcMSMGldPfO6VriCMXEybQfCOY_iPDo-o",
    authDomain: "coffee-burger-coupons.firebaseapp.com",
    projectId: "coffee-burger-coupons",
    storageBucket: "coffee-burger-coupons.firebasestorage.app",
    messagingSenderId: "629773023583",
    appId: "1:629773023583:web:279df3b1d6fb54d36edeea",
    measurementId: "G-TET2SF5Z1Q"

};


// AVVIO FIREBASE

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


console.log("Firebase collegato!");

        });
// SISTEMA OTTIENI COUPON

const button = document.getElementById("codeButton");
const output = document.getElementById("userCode");


button.addEventListener("click", async () => {

    output.innerHTML = "⏳ Ricerca coupon in corso...";


    const q = query(
        collection(db, "coupons"),
        where("used", "==", false)
    );


    const snapshot = await getDocs(q);


    if (snapshot.empty) {

        output.innerHTML = "❌ Coupon terminati.";

        return;

    }


    const couponDoc = snapshot.docs[0];

    const couponData = couponDoc.data();


    await updateDoc(
        doc(db, "coupons", couponDoc.id),
        {
            used: true
        }
    );


    output.innerHTML =
        "🎉 Il tuo coupon è:<br><strong>" +
        couponData.code +
        "</strong>";

});

}
