import React from 'react';
import './style.css';
import { api, opt, makeReditect } from '../../../Components/Func';
import axios from 'axios';

export const StyledProfile = () => {
    const rand = Math.floor(Math.random() * 4);
    const map = [
        'boy_light',
        'girl_bald',
        'girl_red',
        'girl_black',
        'girl_grey',
        'girl_purple',
        'man_brown',
        'man_glasses',
        'man_glasses_orange'
    ];
    const auth_token = JSON.parse(localStorage.getItem('auth_token'));
    const now = new Date();
    var item = 0;
    if (auth_token.expire > now) {
        item = (auth_token.expire - now) / 1E+3 / 60;
    } else {
        item = 0;
    }

    const uuid = auth_token.token;
    const urlUser = api.get.auth.user.uuid;
    const [ data, setData ] = React.useState([]);

    const getData = () => {
        if (!auth_token) {
            makeReditect('/login')
        } else {
            axios.get(urlUser + uuid, opt).then(
                function(res) {
                    setData(res.data);
                }
            ).catch(
                function(error) {
                    console.log(error)
                }
            );
        }
    };
    React.useEffect(() => { getData() },[]);
    
    return (
        <div className="page-content page-container" id="page-content" style={{marginTop: '120px'}} >
        <div className="padding">
            <div className="row container d-flex justify-content-center">
                <div className="col-xl-6 col-md-12">
                    <div className="card user-card-full">
                        <div className="row m-l-0 m-r-0">
                            <div className="col-sm-4 bg-c-lite-green user-profile">
                                <div className="card-block text-center text-white">
                                    <div className="m-b-25"> 
                                        <img 
                                            src={'images/avatars/' + map[rand] + '.svg'} 
                                            className="img-radius" alt="User-Profile-Image"  
                                        >
                                        </img>     
                                        <h1 className="f-w-600 name" >{data.username}</h1>
                                        <p style={{
                                            fontSize: '24px',
                                            marginTop: '130px'
                                        }}>
                                            Reserved Domain: <a href={`https://${data.uuid}.letsdoc.serhiiromaniuk.com`}>https://{data.uuid}.letsdoc.serhiiromaniuk.com</a>
                                            <br></br>
                                            Session: {parseFloat(item).toFixed(2)} minutes left
                                        </p>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="card-block">
                                    <h3 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h3>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600" 
                                                style={{
                                                    fontSize: '24px'
                                                }}
                                            >Email</p>
                                            <h6 className="text-muted f-w-400"
                                                style={{
                                                    fontSize: '20px'
                                                }}
                                            >{'>'} {data.email}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600"
                                                style={{
                                                    fontSize: '24px'
                                                }}
                                            >Country</p>
                                            <h6 className="text-muted f-w-400"
                                                style={{
                                                    fontSize: '20px'
                                                }}
                                            >{'>'} {data.country}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
