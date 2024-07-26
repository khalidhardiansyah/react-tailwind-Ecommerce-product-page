export default function useCurrency(val){
    return val.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
}

// const locale = (val, lang="en-US", style="currency",currency="USD") => val.toLocaleString(lang, {style: style,currency: currency,})
