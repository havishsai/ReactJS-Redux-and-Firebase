const createProject = (project) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        //asynchronous calls
        const profiledetails = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:profiledetails.firstname,
            authorLastName:profiledetails.lastname,
            authorId:authorid,
            created:new Date()
        }).then(()=>{dispatch({type:"CREATE_PROJECT",project});
    }).catch((err)=>{
        dispatch({type:'CREATE_PROJECT_ERROR',err});
    })
    }
};
export default createProject