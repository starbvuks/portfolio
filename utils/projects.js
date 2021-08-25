import firebase from "./firebase.js"

const getProjects = async () => {
    const snapshot = await firebase.firestore().collection("projects").get()
    snapshot.docs.forEach((doc) => console.log(doc.data()))
}

export default getProjects