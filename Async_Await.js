
const payment = true
const result = 50

function enroll() {
    console.log('course enroll is in progress');
    
    const promise = new Promise((resolve, reject)=>{
       setTimeout(() => {
            payment ? resolve('✅ Payment successful') : reject('❌ Payment failed');
       }, 3000);
    })
    return promise

}

function CourseProgress() {
   console.log('Course on progress');

   const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
         result >= 80 ? resolve('✅ You passed the course') : reject('❌ You did not pass');
    },2000)
   })
   return promise
}



function getCertificate() {
   console.log('preparing your certificate');
   
    const promise = new Promise((resolve)=>{
        setTimeout(() => {
            resolve('🎉 Congratulations! Here is your certificate.');
        }, 2000);
    })

    return promise
}

async function LearnCourse(){
    try{
        const Enroll = await enroll()
        console.log(Enroll);
        const progress = await CourseProgress()
         console.log(progress);
        const sms = await getCertificate()       
        console.log(sms);
    }catch(err){
        console.log(err);
        
    }
    
}

LearnCourse()

