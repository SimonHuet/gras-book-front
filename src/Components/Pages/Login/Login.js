import React from 'react';
import { useTranslation } from 'react-i18next';
import './Login.css';

export default () => {
    const { t } = useTranslation('Login');
    return (
        <div className="">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <h1 className="card-title text-center">
                            {t('auth.title')}
                        </h1>

                        <p className="card-content text-center">{t('auth.infos')}</p>

                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="button">
                            {t('auth.manager.redirect.placeholder')}

                        </button>

                    </div>
                </div>
            </div>
        </div>);
};
