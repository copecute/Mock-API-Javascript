# Javascript - Hướng dẫn mock API với data mẫu

> ISSUE: Code giao diện nhưng APIs chưa ready thì phải làm sao?

**GIẢI PHÁP**

1. Xin BE response schema cho các APIs mình cần.
2. Tạo dữ liệu mẫu theo đúng schema mà BE cung cấp (json-generator.com)
3. Giả lập API với dữ liệu mẫu mới generate.

## Cách giả lập lời gọi API trong Javascript

```js
// fake-data.json
[ dữ liệu fake đặt tại đây ]
```

```js
// API.js
// Hàm getAll trả về một Promise và giả mạo việc lấy dữ liệu từ API với setTimeout
const getAll = () => {
  return new Promise((resolve) => {
    // Đặt timeout để giả mạo thời gian lấy dữ liệu từ API (500 milliseconds)
    setTimeout(() => {
      // Sử dụng fetch để tải dữ liệu từ fake-data.json
      fetch('./api/fake-data.json')
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          resolve([]); // Trả về một mảng trống trong trường hợp có lỗi
        });
    }, 500);
  });
};

// Xuất hàm getAll để sử dụng trong các module khác
export default {
  getAll,
};
```

```js
// main.js
// Import module FakeAPI từ đường dẫn './api/API.js'
import FakeAPI from './api/API.js';

// Hàm chính của ứng dụng, được đặt trong một hàm async để sử dụng await
const main = async () => {
  try {
    // Gọi phương thức getAll từ đối tượng FakeAPI và đợi cho đến khi Promise được giải quyết
    const response = await FakeAPI.getAll();
    
    // In ra console kết quả nhận được từ API
    console.log(response);
  } catch (error) {
    // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra trong quá trình gọi API
    console.error('Lỗi khi tải dữ liệu:', error);
  }
}

// Gọi hàm main để thực thi chương trình chính
main();
```