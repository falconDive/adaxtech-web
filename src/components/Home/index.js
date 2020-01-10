import styled, { css } from 'styled-components';

export const Home = styled.div`
    .btn{
        padding: 12px 30px;
    }

    .the-banner{
        position: relative;
        padding-bottom: 180px;
        &__image{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        &__content{
            position: relative;
            z-index: 11;
            &__info{
                padding-top: 80px;
                img{
                   width: 100%;
                   max-width: 300px;
                   margin-top: 30px;
                }
                p{
                    color: #ffff;
                    font-size: 22px;
                }
            }
        }
        &__btn{
            text-align: right;
            padding: 30px 30px 0 0 ;
            &>div{
                display: inline;
                margin-left: 25px;
            }
        }
    }

    .demo-video{
        position: relative;
        z-index: 111;
        margin-top: -130px;
        margin-bottom: 50px;
        &-wrap{
            position: relative;
        }
        &-play{
            position: absolute;
            top: 0; 
            left: 0;
            height: 100%;
            width: 100%;
            .va-block{
                display: table;
                height: 100%;
                width: 100%;
            }
            .va-middle{
                display: table-cell;
                vertical-align: middle;
                text-align: center;
            }
            img{
                transition: transform .5s; 
                transform: scale(0.9);
            }
            &:hover{
                img{
                    transform: scale(1.1);
                }
            }
        }
    }

    .adax-box{
        border: 6px solid #FFB600;
        /* box-shadow: 11px 13px 22px 0 #EAC466; */
        padding: 40px 50px;
        margin-bottom: 70px;
        p{
            color: #ffffff;
            font-size: 20px;
            line-height: 29px;
            margin-bottom: 0;
        }
        .line-hr {
            height: 6px;
            width: 41px;
            background-color: #ffffff;
            margin: 0 auto;
            margin-bottom: 15px;
        }
    }

    h2{
        font-size: 24px;
        padding: 40px 0;
        font-weight: bold;
        color: #ffffff;
    }
    
    h3{
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
    }

    p{
        font-size: 14px;
        color: #ffffff;
    }
    .table-account{
        font-size: 12px;
        color: #ffffff;
        tbody, thead{
            th, td{
                padding: 0 0 5px 0;
            }
        }
    }
    .tg-channel{
        h3{
            font-size: 16px;
        }
    }
    footer{
        padding: 50px 0;
        .logo-terms{
            padding: 70px 0 125px 0;
            p{
                font-size: 14px;
            }
        }
        .terms{
            a{
                color: #ffffff;
                padding: 10px 0;
                margin-right: 40px;
                display: inline-block;
            }
        }
        .social{
            a:not(:first-child){
                margin-left: 50px;
            }
        }
    }
`