import db from '../features/firebase'

// adds a comment to the comments collection under the (IMDB ID) document under collection comments in a new generated document.
const addComment =(imdbID, comment)=>{    
    db.collection("comments").doc(imdbID).collection("comments").doc().set({
        comment: comment,
        timestamp: Date.now(),
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

// gets all comments for a specific document
const getComments = (imdbID) => {
    db.collection("comments").doc(imdbID).collection("comments").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
} 