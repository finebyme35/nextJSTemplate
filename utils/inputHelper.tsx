export function inputNumberHelperDot(event: any) {
    event = event ? event : window.event;
    var charCode = event.which ? event.which : event.keyCode;
    if (
      (charCode > 31 && (charCode < 48 || charCode > 57)) ||
      event.key == "+"
    ) {
      event.preventDefault();
    } else {
      if (event.key != "+") {
        if (event.target.value) {
          if (event.nativeEvent.data == ".") {
            return event.target.value
          } else {
            event.target.value = event.target.value
              .replace(/[^.|\w]|_/g, "")
              .toLowerCase();
            event.target.value = event.target.value
              .replace(/[^0-9.|\s]/g, "")
              .toLowerCase();
  
            return event.target.value.replace(/[^0-9.|\s]/g, "").toLowerCase();
          }
        }
      }
    }
  }
  
  
  
  export function inputNumberHelper(event: any) {
    event = event ? event : window.event;
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) || event.key == "+") {
      event.preventDefault();
    } else {
      if (event.key != "+") {
        if (event.target.value) {
  
          event.target.value = event.target.value.replace(/[^\w]|_/g, '').toLowerCase()
          event.target.value = event.target.value.replace(/[^0-9\s]/g, '').toLowerCase()
          return event.target.value.replace(/[^0-9\s]/g, '').toLowerCase();
        }
  
  
      }
    }
  }
  export function inputNumberHelperWithString(event: any) {
    event = event ? event : window.event;
    var charCode = event.which ? event.which : event.keyCode;
  
    if (charCode > 31 && (charCode < 48 || charCode > 57) || event.key == "+") {
  
      event.preventDefault();
    } else {
      if (event.key != "+") {
        if (event.target.value) {
          event.target.value = event.target.value.replace(/[^\w]|_/g, '').toLowerCase()
          event.target.value = event.target.value.replace(/[^a-zA-Z0-9\s]/g, '').toUpperCase()
          return event.target.value.replace(/[^a-zA-Z0-9\s]/g, '').toUpperCase();
        }
  
  
      }
    }
  }
  
  export function inputNumberHelperWithStringToUpperAndLower(event: any) {
    event = event ? event : window.event;
    var charCode = event.which ? event.which : event.keyCode;
  
    if (charCode > 31 && (charCode < 48 || charCode > 57) || event.key == "+") {
  
      event.preventDefault();
    } else {
      if (event.key != "+") {
        if (event.target.value) {
          event.target.value = event.target.value.replace(/[^\w]|_/g, '')
          event.target.value = event.target.value.replace(/[^a-zA-Z0-9]/g, '')
          return event.target.value.replace(/[^0-9a-zA-Z]/g, '');
        }
  
  
      }
    }
  }
  export function inputStringHelperTwo(event: any) {
    event = event ? event : window.event;
    var charCode = event.which ? event.which : event.keyCode;
  
    if (charCode > 31 && (charCode < 48 || charCode > 57) || event.key == "+") {
  
      event.preventDefault();
    } else {
      if (event.key != "+") {
        if (event.target.value) {
          event.target.value = event.target.value.replace(/[^\w]|_/g, '');
          event.target.value = event.target.value.replace(/[^a-zA-Z\s]/g, '');
          return event.target.value.replace(/[^a-zA-Z\s]/g, '');
        }
  
  
      }
    }
  }
  export function inputNumberHelperTwo(event: any) {
    event = event ? event : window.event;
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) || event.key == "+") {
        event.preventDefault();
    }else{
      if(event.key !== "+"){
        if(event.target.value){
          if(event.nativeEvent.data == "."){
            return event.target.value;
          }else{
            event.target.value = event.target.value.replace(/[^.|\w]|_/g, '').toLowerCase()
            event.target.value = event.target.value.replace(/[^0-9.|\s]/g, '').toLowerCase()
            return event.target.value.replace(/[^0-9.|\s]/g, '').toLowerCase();
          }
          
        }
        
      }
    }
  }
  export function inputNumberHelperWithoutMinus(event: any) {
    event = event ? event : window.event;
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) || event.key == "+") {
      event.preventDefault();
    } else {
      if (event.key != "+") {
        if (event.target.value != "₺NaN") {
          event.target.value = event.target.value.replace(/[^\w]|_/g, '').toLowerCase()
          event.target.value = event.target.value.replace(/[^0-9\s]/g, '').toLowerCase()
          return event.target.value.replace(/[^0-9\s]/g, '').toLowerCase();
        }
  
  
      }
    }
  }

  export function inputCurrencyHelperUndefined(value: any) {
    if (value != undefined) {
      return value
        .toString()
        .replaceAll("₺", "")
        .replaceAll(".", "")
        .replaceAll(",", ".");
    } else {
      return "0";
    }
  }


  export function inputCurrencyFormatHelper(value: any) {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 0,
    }).format(value);
  }
  export function inputCurrencyFormatHelperSuffix(value: any) {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(value).replace("₺", "");
  }


  export function inputDefaultSevenNumberAutoDotValue(value: any, length: number | undefined) {
    if (value && length) {
      if (length == 1 || length == 2 || length == 3) {
        return value;
      } else if (length == 4) {
        return value[0] + "." + value[1] + value[2] + value[3];
      } else if (length == 5) {
        return value[0] + value[1] + "." + value[2] + value[3] + value[4];
      } else if (length == 6) {
        return value[0] + value[1] + value[2] + "." + value[3] + value[4] + value[5];
      }
    }
  }

  export function inputNumberHelperYear(event: any) {
    event = event ? event : window.event;
    var charCode = event.which ? event.which : event.keyCode;
    if (
      (charCode > 31 && (charCode < 48 || charCode > 57)) ||
      event.key == "+"
    ) {
      event.preventDefault();
    } else {
      if (event.key !== "+") {
        if (event.target.value) {
          event.target.value = event.target.value
            .replace(/[^\w]|_/g, "")
            .toLowerCase();
          event.target.value = event.target.value
            .replace(/[^0-9\s]/g, "")
            .toLowerCase();
          return event.target.value.replace(/[^0-9\s]/g, "").toLowerCase();
        }
      }
    }
  }


 export function maskPhone(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{3})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    value = value.replace(/(\d)(\d{2})$/, "$1-$2");
    return value;
  }
  
 export function maskCurrency(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1.$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, " ");
    return value;
  }