function printStars(count) {
  let str = '';
  let i, j;

  for(i = 1; i <= count; i++) {
    for(j = 1; j <= i; j++) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}

// 請參考 printStars，
// 並完成 printStars2，使其執行時結果如圖： https://imgur.com/56BptSu

function  printStars2(count) {
      // todo...
      let str = '';
      let space = ' ';
      let i, j, s, h;

      for (i = 1; i <= count; i++) {
        // console.log('count', count);
        
        for (h = 5; h > i; h--) {
          // console.log('h', h);
          str = str + ' ';
        }

        for (j = 1; j <= i; j++) {          
          // console.log('j',j);
          str = str + '*';
        }
        str += '\n';
      }
      console.log(str);
    }