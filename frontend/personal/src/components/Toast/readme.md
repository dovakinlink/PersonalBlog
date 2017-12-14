# Toast 使用说明

### 引用
```js
import { Toast } from 'components';

// 显示一个只有信息的Toast
// 默认2.5秒关闭
Toast.show( message )

// 设置4.5秒关闭
Toast.show( message, {timeout:4500} )

// 显示一个带有成功Icon的Toast
// 支持 success error info warning
Toast.show( message ,{ type:"success" } );

```