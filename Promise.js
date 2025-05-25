
// const payment = false
// const result = 70

// function enroll() {
//     console.log('course enroll is in progress');
    
//     const promise = new Promise((resolve, reject)=>{
//        setTimeout(() => {
//             if(payment){
//                 resolve('payment success')
//             }
//             else{
//                 reject('payment process failed');
                
//             }
//        }, 3000);
//     })
//     return promise

// }

// function CourseProgress() {
//    console.log('Course on progress');

//    const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(result >= 80 ){
//             resolve('you got 80 plus number ')
//         }
//         else{
//             reject('you could not get enough marks to get the certificate')
//         }
//     },2000)
//    })
//    return promise
// }



// function getCertificate() {
//    console.log('preparing your certificate');
   
//     const promise = new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve('congratulation! you got the certificate');
            
//         }, 2000);
//     })

//     return promise
// }


// enroll()
//     .then(CourseProgress)
//     .then(getCertificate)
//     .then((value)=>{
//         console.log(value);
        
//     })
//     .catch((err)=>{
//         console.log(err);
        
//     })