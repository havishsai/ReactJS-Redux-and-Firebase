const initState = {
    projects:[
        {id:"1",title:"NKD KJNdnd jdldjdnv dnldav ",content:"jnrrfkjrnrk fwrnjfwowifnwor fworfmof"},
        {id:"1",title:"POWMFVMD KDEKD",content:"rgrimfjvmbfdlbdfb"},
        {id:"1",title:"VKDLKDKD LKEMFKVMDVK",content:"voff,pvmfdvdvmkfvmfvkmvkf vdkmvkvmdvmdv dpov"},
    ]
}

const projectReducer = (state = initState,action) => {
    switch(action.type){
        case 'CREATE_PROJECT':{console.log(action.project);break;}
        case 'CREATE_PROJECT_ERROR':{console.log(action.err);break;}
        default :{}
    }
    return state;
}

export default projectReducer
