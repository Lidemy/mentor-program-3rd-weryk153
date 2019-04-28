function printStars(n) {
  let stars = '';
  if (n >= 1 && n <= 30) {
    for (let i = 1; i <= n; i += 1) {
      stars += '*';
      if (i !== n) {
        stars += '\n';
      }
    }
    console.log(stars);
  }
}

printStars(4);
