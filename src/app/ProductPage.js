import Image from "next/image";
import styles from './ProductPage.module.css';

export default function ProductPage() {
    const product = {
      price: 150, // ราคาสินค้า
      stock: 20, // จำนวนในสต็อก
      image : "/path-to-image.jpg", // ลิงก์รูปภาพสินค้า
      description: "รายละเอียดของสินค้า A เช่น ขนาด น้ำหนัก หรือคุณสมบัติอื่น ๆ", // คำอธิบาย
    };
  
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">{product.description}</p>
                <h4 className="text-success">ราคา: {product.price} บาท</h4>
                <h5 className="text-primary">ในสต๊อก: {product.stock} ชิ้น</h5>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => alert("เพิ่มสินค้าในตะกร้าแล้ว!")}
                >
                  สั่งซื้อ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  