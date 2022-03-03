
import dynamic from 'next/dynamic';
const Container = dynamic(() => import("appcontainer/AppContainer"), {
    ssr: false,
  });

const ExchangeComponent = dynamic(() => import("currency/Exchange"), {
ssr: false,
});

const CurrencyProps = {
    label: 'Currency Exchange'
}
const Currency = () => {
    return <Container {...CurrencyProps}>
        <ExchangeComponent />
    </Container>
}

export default Currency;