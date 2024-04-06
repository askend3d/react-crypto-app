import { useState } from "react";

function AddAssetForm( ) {
    const [coin, setCoin] = useState(null);

    if (!coin) return

    return (
        <form>Form Asset</form>
    );
}

export default AddAssetForm;
