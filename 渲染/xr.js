let arrs = [];
for (let i = 1; i <= 4; i++) {
  arrs.push(+prompt(`请输入第${i}季度的额度：`));
}

document.writeln(`<div class="box">`);

for (let j = 0; j < arrs.length; j++) {
  document.writeln(`
          <div style="height: ${arrs[j]}px">
          <span>${arrs[j]}</span>
          <h4>第${j + 1}季度</h4>
        </div>
        `);
}

document.writeln(`</div>`);
