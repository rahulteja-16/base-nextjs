import dynamic from 'next/dynamic';
import React from 'react';

const Container = dynamic(() => import("appcontainer/AppContainer"), {
    ssr: false,
});
const Exchange = dynamic(() => import("currency/Exchange"), {
    ssr: false,
});

const CurrencyProps = {
    label: 'Currency Exchange'
}


const Currency = () => {
    return (
    <>
        <Container {...CurrencyProps}>
            <Exchange />
        </Container>
    </>
    )
}

export default Currency;