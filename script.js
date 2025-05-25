// const payment = true
// const result = 80

// function enroll(callback) {
//     console.log('Course enrollment is in progress')
//     setTimeout(function () {
//         if (payment) {
//             console.log('payment success')
//             callback()
//         }
//         else {
//             console.log('payment process faild')
//         }
//     }, 5000);
// }

// function CourseProgress(callback) {
//     console.log('Course on progress')
//     setTimeout(function () {
//         if (result >= 80) {
//             console.log('you get 80 marks on aboue');
//             callback()
//         }
//         else {
//             console.log('you could not get enough marks to get the certificate')
//         }
//     }, 6000);
// }

// function getCertificate() {
//     console.log('preparing your certificate')
//     setTimeout(function () {
//         console.log('congrats!')
//     }, 4000);
// }


// enroll(() => {
//     CourseProgress(getCertificate)
// })