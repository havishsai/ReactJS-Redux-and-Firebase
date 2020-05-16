const createProject = (project) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        //asynchronous calls
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Net',
            authorLastName:'Ninja',
            authorId:12345,
            created:new Date()
        }).then(()=>{dispatch({type:"CREATE_PROJECT",project});
    }).catch((err)=>{
        dispatch({type:'CREATE_PROJECT_ERROR',err});
    })
    }
};
export default createProject