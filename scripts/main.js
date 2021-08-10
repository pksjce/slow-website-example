$(document).ready(() => {
  const breeds = {
    pic1: { name: "Akita", width: "3000", height: "2000" },
    pic2: { name: "Beagle", width: "5557", height: "3705" },
    pic4: { name: "Bull Terrier", height: "4856", width: "2732" },
    pic3: { name: "Border Collie", height: "4000", width: "6000" },
    pic5: { name: "PitBull", width: "4272", height: "2848" },
    pic6: { name: "Australian Shepherd", width: "3840", height: "5760" },
    pic7: { name: "Dalmation", width: "4160", height: "6240" },
    pic8: { name: "Doberman", width: "4000", height: "6000" },
    pic9: { name: "German Shepherd", width: "3607", height: "2401" },
    pic12: { name: "Husky", width: "2137", height: "3319" },
    pic14: { name: "Pointer", width: "2073", height: "2771" },
    pic15: { name: "Poodle", width: "2000", height: "2857" },
    pic16: { name: "Pug", width: "4650", height: "3357" },
    pic17: { name: "Rottweiler", width: "5184", height: "3456" },
    pic18: { name: "Shar Pei", width: "5184", height: "3456" },
    pic19: { name: "Shnauzer", width: "7785", height: "5190" }
  };
  setTimeout(() => {
    $("#adplacement").append(
      '<div class="ad"> This is an advertisement </div>'
    );
  }, 1000);
});
