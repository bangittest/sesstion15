// // Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn.Gọi hàm vừa xây dựng được.
// //chức năng:tính diện tích chu vi
// function caculateAreaAndPer(radius) {
//     let area = Math.PI * radius * radius
//     let perimeter = 2 * Math.PI * radius;
//     return [area, perimeter]
// }
// console.log(caculateAreaAndPer(5));
// console.log(caculateAreaAndPer(10));
// console.log(caculateAreaAndPer(15));
// console.log(caculateAreaAndPer(20));
// console.log(caculateAreaAndPer(25));
// console.log(caculateAreaAndPer(30));


// Bài 3: Viết chương trình tạo hàm kiểm tra xem ký tự nhập vào có phải ký tự số hay không ?

// function kyTuSo(kyTu) {
//     return !isNaN(kyTu)
// }


// console.log(kyTuSo(10));
// console.log(kyTuSo(b));
// function isNumber(string) {
//     // let n = parseInt(string){
//     // return (string <= 0 || string > 0)
//     return !Object.is(parseInt(string), NaN)
//     // }

// }
// console.log(isNumber("a"));

// Bài 4: Viết chương trình cho người dùng nhập vào một số,
//     kiểm tra xem số đưa vào có phải nguyên dương không ?
//     Nếu đung trả vè true, sai trả về false
// function kiemTraSo(number) {
//     return number > 0
// }
// console.log(kiemTraSo("-10"));
// console.log(kiemTraSo("10"));

// // Bài 5: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ 2 số nguyên đó
// function doiCho(a, b) {
//     let c = a;
//     a = b
//     b = c
//     return [a, b];
// }

// let doicho = doiCho(3, 5)
// console.log(doicho);

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.Gọi hàm vừa xây dựng được.
// function giaiThua(a) {
//     let sum = 1;
//     for (i = 1; i <= a; i++) {
//         sum *= i
//     }
//     return sum;
// }

// console.log(giaiThua(10));

// // Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào.Gọi hàm vừa xây dựng được.
// function binhPhuong(a) {
//     let tich = 1
//     tich = a * a
//     return tich
// }
// binhphuong = binhPhuong(10)
// console.log(binhphuong);

// // Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất

// function finMin(a, b, c) {
//     let min = a
//     if (b < min) {
//         min = b
//     } if (c < min) {
//         min = c
//     }
//     return min

// }
// finmin = finMin(11, 3, 2)
// console.log(finmin);


// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ,
//     kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về - 1.

// function arr1(arr, b) {
//     let flag = false
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === b) {
//             flag = true
//             count++

//         }
//     } if (flag) {
//         return count
//     }
//     else {
//         return -1
//     }
// }
// console.log(arr1([1, 3, 4, 5, 5, 6, 4, 3], 5));

// // Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
// function doiCho(a, b) {
//     return [a, b]
// }
// console.log(doiCho(2, 4).reverse());

// Viết hàm trả về tất cả các cặp số có tổng bằng 10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // function tong(arr) {
// //     let arr1 = []
// //     for (const i of arr) {

// //         for (const j of arr) {
// //             if (i + j === 10) {
// //                 arr1.push([i, j])
// //             }

// //         }
// //     }
// //     return arr1
// // }
// // console.log(tong(arr));
// function tong(arr) {
//     let arr1 = []
//     for (let i = 1; i <= arr.length; i++) {
//         for (let j = 1; i <= arr.length; i++) {
//             if (i + j === 10) {
//                 arr1.push([i, j])
//             }
//         }
//     }
//     return arr1
// }
// console.log(tong(arr));

// function soNguyenTo(a) {
//     let flag = false
//     if (a % 2 == 0) {
//         flag = true
//     }
//     if (!flag) {
//         console.log(`la snt`);
//     } else {
//         console.log(`ko la snt`);
//     }
//     return (a)

// }
// console.log(soNguyenTo(11));

// // Bài 6: Cho người dùng nhập vào chuỗi số bất kì.Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
// function sapXep(a, b, c) {
//     return [a, b, c];
// }
// console.log(sapXep(4, 2, 1).sort((a, b) => a - b))

// // Bài 7: Viết chương trình tạo hàm để kiểm tra xem năm người dùng nhập vào có phải năm nhuận không
// 
//function kiemTra(year) {
//     if (year % 4 === 0 && year % 100 != 0 || year % 400 == 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(kiemTra(2023));



// Bài 4: Cho người dùng nhập vào chuỗi kí tự.Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng

// Input: “Hello World”

// Output:
let chuoi = prompt("Nhập vào chuỗi ký tự bất kì:"); // nhap chuoi minh can
let chuDaXet = []; // mang luu cac chu minh da dem so lan cho no
function countRepeat(chu) {

    for (i = 0; i < chuDaXet.length; i++) {
        if (chu == chuDaXet[i]) {
            return;
        }
    }

    let count = 0;
    for (i = 0; i < chuoi.length; i++) {
        if (chu == chuoi[i]) {
            count++;
        }
    }
    chuDaXet.push(chu);
    return count;
}


for (let i = 0; i < chuoi.length; i++) {
    let count = countRepeat(chuoi[i]);

    if (count != undefined) {
        console.log(`Chu ${chuoi[i]} xuat hien ${count} lan`);
    }
}







