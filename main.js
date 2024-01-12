// Import FakeAPI từ module API.js
import FakeAPI from './api/API.js';

// Hàm chính thực hiện việc gọi API và xử lý dữ liệu
const main = async () => {
  try {
    // Gọi API thông qua phương thức getAll của FakeAPI
    const response = await FakeAPI.getAll();
    console.log('Kết quả trả về 1 mảng gồm 7 đối tượng:');
    console.log(response);

    // Lấy phần tử select có id là 'nation'
    const selectElement = document.getElementById('nation');

    // Kiểm tra xem phần tử select có tồn tại không
    if (selectElement) {
      // Thêm các option vào select từ dữ liệu API
      response.forEach((item) => {
        const optionElement = document.createElement('option');
        optionElement.value = item._id;
        optionElement.text = item.name;
        selectElement.add(optionElement);
      });
    } else {
      console.log('Element with id "nation" not found.');
    }
  } catch (error) {
    console.log('Failed to fetch:', error);
  }
};

// Hàm xử lý khi người dùng nhấn vào nút "CallAPI"
const handleCallAPI = async () => {
  try {
    // Gọi hàm main để thực hiện việc gọi API và xử lý dữ liệu
    await main();
  } catch (error) {
    console.error('Error calling API:', error);
  }
};

// Gắn sự kiện click cho phần tử có id "CallAPI"
const callAPIButton = document.getElementById('CallAPI');
if (callAPIButton) {
  callAPIButton.addEventListener('click', handleCallAPI);
} else {
  console.log('Element with id "CallAPI" not found.');
}
