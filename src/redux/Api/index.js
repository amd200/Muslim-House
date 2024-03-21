const fs = require('fs');

// قراءة محتوى الملف JSON
fs.readFile('./azkar.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // تحويل المحتوى إلى كائن JavaScript
    const jsonData = JSON.parse(data);

    // تحديث قيمة defaultCount لتكون مساوية لقيمة count في كل عنصر
    jsonData.forEach(item => {
      item.defaultCount = item.count;
    });

    // تحويل الكائن إلى سلسلة JSON
    const updatedData = JSON.stringify(jsonData, null, 2);

    // كتابة البيانات المحدثة إلى الملف
    fs.writeFile('file.json', updatedData, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('File updated successfully!');
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
