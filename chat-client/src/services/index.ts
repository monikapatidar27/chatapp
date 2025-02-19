export const login_user = async (formData: unknown) => {
    try {
        const res = await fetch('http://localhost:8000/api/login-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("Something wents wrong.", error)
    }


}

export const register_user = async (formData: unknown) => {
    try {
        const res = await fetch('http://localhost:8000/api/register-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("Something wents wrong", error)
    }
}


export const get_all_users = async (id: unknown , token  : string) => {
    
    try {
        const res = await fetch(`http://localhost:8000/api/get-all-users?id=${id}`, {
            method: 'GET',
            headers : {
                'authorization': `Bearer ${token}`
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("Something wents wrong", error)
    }
}


export const getChatData = async (data: any , token  : string) => {
   
    const { senderId, receiverId } = data;
    try {
        const res = await fetch(`http://localhost:8000/api/get-user-chat?senderId=${senderId}&receiverId=${receiverId}`, {
            method: 'GET',
            headers : {
                'authorization': `Bearer ${token}`
            },
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("Something wents wrong.", error)
    }
}
export const getGroupChatData = async (data: any, token  : string) => {
   
    const { senderId, receiverId , groupId } = data;
    try {
        const res = await fetch(`http://localhost:8000/api/get-group-chat?senderId=${senderId}&receiverId=${receiverId}&groupId=${groupId}`, {
            method: 'GET',
            headers : {
                'authorization': `Bearer ${token}`
            },
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("Something wents wrong", error)
    }
}


export const send_message = async (formData: any , token  : string) => {


    try {
        const res = await fetch(`http://localhost:8000/api/send-user-message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        
        console.log('Something wents wrong', error.message);
    }
}



export const create_group  =  async (formData: any , token  : string) => {
    try {
        const res = await fetch(`http://localhost:8000/api/create-group`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData),
            
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("Something went wrong", error)
    }
}


export const get_user_group  = async (id: any , token  : string) => {
    try {
        const res = await fetch(`http://localhost:8000/api/get-user-group?id=${id}`, {
            method: 'GET',
            headers : {
                'authorization': `Bearer ${token}`
            },
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("Something wents wrong", error)
    }
}


export const send_group_message = async (formData: any , token  : string) => {
    
        try {
            const res = await fetch(`http://localhost:8000/api/send-group-message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            return data;
        } catch (error: any) {
            console.log("Something wents wrong", error)
        }
}


export const delete_group = async (ownerId  : string, groupId : string, token  : string) => {
    
    try {
        const res = await fetch(`http://localhost:8000/api/delete-group?ownerId=${ownerId}&groupId=${groupId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
       console.log("Something wents wrong", error)
    }
}


export const delete_messages_from_me = async (deletingData : any ,token  : string) => {
    
    try {
        const res = await fetch(`http://localhost:8000/api/delete-group-message-from-me`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(deletingData)
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
       console.log("Something wents wrong", error)
    }
}