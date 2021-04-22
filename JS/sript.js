 let count = 10;

setTimeout(() => {
  document.getElementById("div").innerHTML = count--;
  setTimeout(() => {
    document.getElementById("div").innerHTML = count--;
    setTimeout(() => {
      document.getElementById("div").innerHTML = count--;
      setTimeout(() => {
        document.getElementById("div").innerHTML = count--;
        setTimeout(() => {
          document.getElementById("div").innerHTML = count--;
          setTimeout(() => {
            document.getElementById("div").innerHTML = count--;
            setTimeout(() => {
              document.getElementById("div").innerHTML = count--;
              setTimeout(() => {
                document.getElementById("div").innerHTML = count--;
                setTimeout(() => {
                  document.getElementById("div").innerHTML = count--;
                  setTimeout(() => {
                    document.getElementById("div").innerHTML = count--;
                    setTimeout(() => {
                      document.getElementById("div").innerHTML =
                        "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);