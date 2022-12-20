import { ProductCard } from "components/ProductCard";
import { FiltersBlock } from "components/FiltersBlock";
import { MainLayout } from "layouts/MainLayout";
import {
    BannerStyled,
    ProductsStyled,
    ContentStyled,
    MainPageStyled,
    TableStyled,
    NothingStyled,
    RightContainerStyled,
} from "pages/HomePage/HomePage.style";
import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { getProductListAction } from "store/products/products.actions";
import { FetchStatus } from "types/asyncState";
import { ProductCreateForm } from "components/ProductCreateForm";
import { useIonRouter } from "@ionic/react";

export const HomePage = () => {
    const dispatch = useAppDispatch();
    const { coffees: coffeesSearch, status } = useAppSelector((store) => store.coffee);
    const canCreate = useAppSelector((store) => store.auth.isAdmin || store.auth.isStaff);

    const router = useIonRouter();

    const handleCardClick = useCallback(
        (id: number) => {
            router.push(`/coffees/${id}`);
        },
        [router]
    );

    useEffect(() => {
        if (status === FetchStatus.IDLE) {
            dispatch(getProductListAction());
        }
    }, [dispatch, status]);

    return (
        <MainLayout>
            <MainPageStyled>
                <ContentStyled>
                    <h1>Кофейня</h1>
                    <h3>Выберете понравившийся кофе</h3>

                    <TableStyled>
                        <ProductsStyled>
                            <FiltersBlock />
                            {coffeesSearch?.length ? (
                                <>
                                    {coffeesSearch?.map((coffee) => (
                                        <ProductCard
                                            key={coffee.id}
                                            coffee={coffee}
                                            onClick={() => handleCardClick(coffee?.id ?? 0)}
                                        />
                                    ))}
                                </>
                            ) : (
                                <NothingStyled>Нет продуктов</NothingStyled>
                            )}
                        </ProductsStyled>
                        <RightContainerStyled>
                            <BannerStyled>Место для вашей рекламы</BannerStyled>
                            {canCreate && <ProductCreateForm />}
                        </RightContainerStyled>
                    </TableStyled>
                </ContentStyled>
            </MainPageStyled>
        </MainLayout>
    );
};
