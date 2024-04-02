import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetchCrypto, fetchCryptoAssets } from "../api";
import { percentDifference } from "../utils";

export const CryptoContext = createContext({
    assets: [],
    crypto: [],
    loading: false,
});


// eslint-disable-next-line react/prop-types
export function CryptoContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [crypto, setCrypto] = useState([]);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        async function preload() {
            setLoading(true);
            const { result } = await fakeFetchCrypto();
            const assets = await fetchCryptoAssets();
            setAssets(
                assets.map((asset) => {
                    const coin = result.find((c) => c.id === asset.id);
                    return {
                        grow: asset.price < coin.price,
                        growPercent: percentDifference(asset.price, coin.price),
                        totalAmount: asset.amount * coin.price,
                        totalProfit:
                            asset.amount * coin.price -
                            asset.amount * asset.price,
                        ...asset,
                    };
                })
            );
            setCrypto(result);
            setLoading(false);
        }
        preload();
    }, []);

    return (
        <CryptoContext.Provider value={{ loading, assets, crypto }}>
            {children}
        </CryptoContext.Provider>
    );
}

export function useCrypto() {
    return useContext(CryptoContext);
}


