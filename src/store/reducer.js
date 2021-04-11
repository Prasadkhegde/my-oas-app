const initialState = {
  payments: [],
  logins: [],
  users: [],
  colleges:[],
  addresses :[],
  courses : [],
  branches:[],
  programs:[],
  applications: [],
  data: null,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {

      
    case "FIND_PAYMENTS":
      return { ...state, payments: payload, message: "" };    

    case "FIND_PAYMENT":
      return { ...state, payments: payload, updatePayment: payload.payment };

    case "ADD_PAYMENT":
      return { ...state, payments: state.payments, message: payload.message };

    case "DELETE_PAYMENT":
      var filteredList = state.payments.filter(
        (payment) => payment.id !== payload.payment.id
      );
      return { ...state, payments: filteredList, message: "" };

    case "UPDATE_PAYMENT":
      console.log(payload.message);
      return { ...state, payments: state.payments, message: payload.message };

    case "FIND_USERS" :
        return {...state, users : payload,message:''}

    case "FIND_USER" :
        return {...state, users : payload,updateUser : payload.user}

    case "ADD_USER":
        return {...state, users: state.users,message:payload.message}

    case "DELETE_USER":
        return { ...state, message: payload.message };

    case "UPDATE_USER":
        return { ...state, message: payload.message, users: state.users };

      case "FIND_LOGINS" :
        return {...state, logins : payload,message:''}

    case "FIND_LOGIN" :
            return {...state, logins : payload,updateLogin : payload.login}

    case "ADD_LOGIN":
        return {...state, logins: state.users,message:payload.message}


    case "DELETE_LOGIN":
        return { ...state, message: payload.message };

     

    case "CHANGE_PASSWORD":
      return { ...state, message: payload.message};   
               
                
                  
              case "FIND_COLLEGE" :
                  return {...state,colleges : payload,message:''}
          
                  case "ADD_COLLEGE":
                      return {...state,colleges: state.colleges,message:payload.message}
              
                      case "UPDATE_COLLEGE":
                          console.log(payload.message)
                              return {...state,colleges: state.colleges,message:payload.message}
          
                              
                    case "FIND_ADDRESS" :
                        return {addresses : payload,message:''}
                
                        case "ADD_ADDRESS":
                            return {addresses: state.addresses,message:payload.message}
                    

              case "DELETE_COLLEGE":
                  var filteredList2 = state.colleges.filter((college)=> college.collegeRegId !== payload.collegeRegId)
                  return {...state,colleges: filteredList2,message:''}
                              
                  case "FIND_COURSES" :
                    return {...state, courses : payload,message:''}
            
                case "FIND_COURSE" :
                        return {...state, courses : payload,updateCourse : payload.course}
            
                case "ADD_COURSE":
                    return {...state, courses: state.courses,message:payload.message}
            
                case "DELETE_COURSE":
                    console.log(payload)
                    var filteredList1 = state.courses.filter((course)=> course.courseId !== payload.course.courseId)
                    return {...state, courses: filteredList1,message:''}
                // case "DELETE_COURSE":
                //     return { ...state, message: payload.message };
            
                case "UPDATE_COURSE":
                    console.log(payload.message)
                        return {...state, courses: state.courses,message:payload.message}
            
                case "FIND_BRANCHES" :
                    return {...state, branches : payload,message:''}
                case "FIND_BRANCH" :
                    return {...state, branches : payload,updateBranch : payload.branch}
                                
                case "ADD_BRANCH":
                    return {...state, branches : state.branches,message:payload.message}
                        
                case "DELETE_BRANCH":
                    filteredList = state.branches.filter((branch)=> branch.branchId !== payload.branch.branchId)
                        return {...state, branch: filteredList,message:''}
                        
                case "UPDATE_BRANCH":
                    console.log(payload.message)
                        return {...state, branches: state.branches,message:payload.message}
            
                case "FIND_PROGRAMS" :
                    return {...state, programs : payload,message:''}
            
                case "FIND_PROGRAM" :
                    return {...state, programs : payload,updateProgram : payload.program}
                        
                                    
                case "ADD_PROGRAM":
                    return {...state, programs : state.programs,message:payload.message}
                        
                case "DELETE_PROGRAM":
                    filteredList = state.programs.filter((program)=> program.programId !== payload.program.programId)
                        return {...state, program: filteredList,message:''}
                        
                case "UPDATE_PROGRAM":
                    console.log(payload.message)
                        return {...state, programs: state.programs,message:payload.message}
                
                        case "FIND_PROGRAMSCHEDULES" :
                            return {...state, programSchedules : payload,message:''}
                    
                        case "FIND_PROGRAMSCHEDULED" :
                            return {...state, programSchedules : payload,updateProgramScheduled : payload.programScheduled}
                                
                                    // case "FIND_USER" :
                                    //         return {users : payload,updateUser : payload.user}
                                
                        case "ADD_PROGRAMSCHEDULED":
                            return {...state, programSchedules : state.programSchedules,message:payload.message}
                                
                        case "DELETE_PROGRAMSCHEDULED":
                            filteredList = state.programSchedules.filter((programScheduled)=> programScheduled.scheduleId !== payload.programScheduled.scheduleId)
                                return {...state, programScheduled: filteredList,message:''}
                                
                        case "UPDATE_PROGRAMSCHEDULED":
                            console.log(payload.message)
                                return {...state, programSchedules: state.programSchedules,message:payload.message}        
                        
             
    case "FIND_UNIVERSITY" :
        console.log("fetchin.....")
            return {...state, universitys : payload}

    case "ADD_UNIVERSITY":
        return {...state, universitys: state.universitys,message:payload.message}

    case "DELETE_UNIVERSITY":
        var filteredList3 = state.universitys.filter((university)=> university.universityId !== payload.universityId)
        return {...state, universitys: filteredList3,message:''}

    case "UPDATE_UNIVERSITY":
        console.log(payload.message)
            return {...state, universitys: state.universitys,message:payload.message}           

    case "ADD_APPLICATION":
        return { ...state, data: payload };
  
    case "All_APPLICATIONS":
      return {...state, applications: payload}
  
      case "DELETE_APPLICATION":
        return { ...state, data: payload };
  
      case "UPDATE_APPLICATION":
        return { ...state, data: payload };
  





    default:
      return state;
  }
};

export default reducer;



