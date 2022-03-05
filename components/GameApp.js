import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import { mount } from 'game/Game';


export default ({ }) => {
    const ref = useRef(null);
    const routerDetails = useRouter();

    useEffect(() => {
        const { onParentNavigate } =  mount(ref.current, {
            onNavigate: ({ location: {pathname: nextPathname} }) => {
                const { asPath } = routerDetails;
                if (asPath !== nextPathname) {
                    console.log(1);
                    routerDetails.push({pathname: nextPathname});
                }
            },
            initialPath: routerDetails.asPath
        });

        onParentNavigate({pathname: routerDetails.asPath})
        routerDetails.events.on('routeChangeComplete', (newPath) => onParentNavigate({ pathname: newPath }));
    }, []);

    return <div ref={ref} />;
};