//c97d144cf247a90908dcb730719753fc

//api key


//http://api.weatherstack.com/current?access_key=c97d144cf247a90908dcb730719753fc (remove all spaces in url)



function sendReq(){

    const promise=fetch("http://api.weatherstack.com/current?access_key=c97d144cf247a90908dcb730719753fc");



promise
.then((res)=> res.json())
.then((data)=>{

    //show this data on front end
    console.log(data);

})
.catch((err)=>console.log(err));

}