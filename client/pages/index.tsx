import MainLayout from '@/layouts/MainLayout';

const Index = () => {
    return (
        <div >  
            <MainLayout>
                <div className='center'>
                    <h1>Добро пожаловать!</h1>
                    <h3>Здесь собраны лучше треки!</h3>
                </div>
            </MainLayout>

            <style jsx>
                {`
                    .app {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>
        </div>
    );
};

export default Index;