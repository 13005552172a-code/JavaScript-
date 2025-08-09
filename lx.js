let price = +prompt("请输入你选择的价格：");
let num = +prompt("请输入你选择的个数：");
let address = prompt("请输入你选择的地址：");
let result = price * num;
document.writeln(`
  <table>
      <tr>
        <th>商品名称</th>
        <th>商品价格</th>
        <th>商品数量</th>
        <th>总价</th>
        <th>收货地址</th>
      </tr>
      <tr>
        <th >xiaomi</th>
        <th >${price}</th>
        <th >${num}</th>
        <th >${result}</th>
        <th >${address}</th>
      </tr>
    </table>
    `);
