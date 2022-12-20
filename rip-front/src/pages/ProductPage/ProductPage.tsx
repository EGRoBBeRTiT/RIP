import { useIonRouter } from "@ionic/react";
import { Button } from "components/Button";
import { ProductCreateForm } from "components/ProductCreateForm";
import { MainLayout } from "layouts/MainLayout";
import { DescriptionStyled, ProductPageStyled, TextStyled } from "pages/ProductPage/ProductPage.style";
import React, { useCallback, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "store";
import { changeCartAction } from "store/cart/cart.actions";
import { getProductByIdAction } from "store/products/products.actions";
import { resetProductState } from "store/products/products.reducer";
import { FetchStatus } from "types/asyncState";

export const ProductPage = () => {
    const params = useParams<{ id: string }>();
    const products = useAppSelector((store) => store.cart.cart?.products);
    const router = useIonRouter();

    const dispatch = useAppDispatch();
    const { coffee, editStatus } = useAppSelector((store) => store.coffee);
    const canEdit = useAppSelector((store) => store.auth.isAdmin || store.auth.isStaff);

    useEffect(() => {
        if (!coffee) {
            dispatch(getProductByIdAction(Number(params?.id)));
        }
    }, [coffee, dispatch, params.id]);

    useEffect(
        () => () => {
            dispatch(resetProductState());
        },
        [dispatch]
    );

    useEffect(() => {
        if (editStatus === FetchStatus.FULFILLED) {
            router.push("/");
        }
    }, [editStatus, router]);

    const isInCart = useMemo(
        () => !!coffee?.id && products?.map((product) => product.id).includes(coffee?.id),
        [coffee?.id, products]
    );

    const handleCartClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            if (coffee?.id) {
                dispatch(changeCartAction([...(products?.map((product) => product.id) ?? []), coffee?.id]));
            }
        },
        [coffee?.id, dispatch, products]
    );

    return (
        <MainLayout>
            <ProductPageStyled>
                <h1>{coffee?.name}</h1>
                <h2>{coffee?.price} ₽</h2>
                {!canEdit && (
                    <DescriptionStyled>
                        <span>
                            Бренд: <span>{coffee?.brand}</span>
                        </span>
                        <span>
                            Тип: <span>{coffee?.type}</span>
                        </span>
                        <span>
                            Крепкость: <span>{coffee?.strength}</span>
                        </span>
                    </DescriptionStyled>
                )}
                {isInCart ? <TextStyled>В корзине</TextStyled> : <Button onClick={handleCartClick}>В корзину</Button>}

                {canEdit && <ProductCreateForm isForEdit initialValues={coffee} productId={Number(params.id)} />}
            </ProductPageStyled>
        </MainLayout>
    );
};
