import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component.jsx";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    //const { collections } = this.state;
    //console.log(this.state.collections);
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
