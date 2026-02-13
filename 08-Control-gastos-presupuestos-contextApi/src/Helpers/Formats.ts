export const formatCurrency = (butget: number)=>{
    return new Intl.NumberFormat("en-es", {style: "currency", currency: "cop"}).format(butget)
}