import React, { useState } from "react";
import "./Modal.scss";

const Modal = () => {
  const [modalAcc, setModalAcc] = useState(false);
  return (
    <div className="modal">
      <div className="top">
        <div className="input_text">
          <input type="text" placeholder="Qayerdan" />
          <button onClick={() => setModalAcc(!modalAcc)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7485 1.40806L1.23653 16.609C2.13481 17.4705 3.35411 18 4.69707 18L11.0002 18C13.7617 18 16.0002 15.7614 16.0002 13L16.0002 4.71732C16.0002 3.44831 15.5275 2.28972 14.7485 1.40806Z"
                fill="#EF6A3C"
              />
            </svg>
          </button>
          <div
            className={
              modalAcc ? "modal_accordion active" : "modal_accordion"
            }
          >
            <div className="acc">
              <h2>Toshloq</h2>
              <p>Tosh</p>
            </div>
            <div className="acc">
              <h2>Toshloq</h2>
              <p>Tosh</p>
            </div>
            <div className="acc">
              <h2>Toshloq</h2>
              <p>Tosh</p>
            </div>
            <div className="acc">
              <h2>Toshloq</h2>
              <p>Tosh</p>
            </div>
          </div>
        </div>
        <div className="input_text">
          <input type="text" placeholder="Qayerga" />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7485 1.40806L1.23653 16.609C2.13481 17.4705 3.35411 18 4.69707 18L11.0002 18C13.7617 18 16.0002 15.7614 16.0002 13L16.0002 4.71732C16.0002 3.44831 15.5275 2.28972 14.7485 1.40806Z"
                fill="#EF6A3C"
              />
            </svg>
          </button>
        </div>
        <div className="input_number">
          <div className="left">
            <p>12 yoshdan kattalar</p>
            <h1>Yoshi kattalar</h1>
          </div>
          <div className="right">
            <input type="number" min={0} defaultValue={0} />
          </div>
        </div>
        <div className="input_number">
          <div className="left">
            <p>2 yoshdan 12 yoshgacha</p>
            <h1>Bolalar</h1>
          </div>
          <div className="right">
            <input type="number" min={0} defaultValue={0} />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="box">
          <p>Sana</p>

          <div className="input_text">
            <input type="text" placeholder="Sanani tanlang" />
            <button onClick={() => setModalAcc(!modalAcc)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.7485 1.40806L1.23653 16.609C2.13481 17.4705 3.35411 18 4.69707 18L11.0002 18C13.7617 18 16.0002 15.7614 16.0002 13L16.0002 4.71732C16.0002 3.44831 15.5275 2.28972 14.7485 1.40806Z"
                  fill="#EF6A3C"
                />
              </svg>
            </button>
            <div
              className={
                modalAcc ? "modal_accordion active" : "modal_accordion"
              }
            >
              <div className="acc">
                <h2>Toshloq</h2>
                <p>Tosh</p>
              </div>
              <div className="acc">
                <h2>Toshloq</h2>
                <p>Tosh</p>
              </div>
              <div className="acc">
                <h2>Toshloq</h2>
                <p>Tosh</p>
              </div>
              <div className="acc">
                <h2>Toshloq</h2>
                <p>Tosh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <p>Qaytish</p>

          <div className="input_text">
            <input type="text" placeholder="Sanani tanlang" />
            <button onClick={() => setModalAcc(!modalAcc)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.7485 1.40806L1.23653 16.609C2.13481 17.4705 3.35411 18 4.69707 18L11.0002 18C13.7617 18 16.0002 15.7614 16.0002 13L16.0002 4.71732C16.0002 3.44831 15.5275 2.28972 14.7485 1.40806Z"
                  fill="#EF6A3C"
                />
              </svg>
            </button>
            <div
              className={
                modalAcc ? "modal_accordion active" : "modal_accordion"
              }
            >
              <div className="acc">
                <h2>Toshloq</h2>
                <p>Tosh</p>
              </div>
              <div className="acc">
                <h2>Toshloq</h2>
                <p>Tosh</p>
              </div>
              <div className="acc">
                <h2>Toshloq</h2>
                <p>Tosh</p>
              </div>
              <div className="acc">
                <h2>Toshloq</h2>
                <p>Tosh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="input_number">
          <div className="left">
            <p>2 yoshgacha</p>
            <h1>Go’daklar</h1>
          </div>
          <div className="right">
            <input type="number" min={0} defaultValue={0} />
          </div>
        </div>
        <button className="search">Izlash</button>
      </div>
      {/* <div className="modal_accordion">
        <div className="acc">
            <h2>Toshloq</h2>
            <p>Tosh</p>
        </div>
        <div className="acc">
            <h2>Toshloq</h2>
            <p>Tosh</p>
        </div>
        <div className="acc">
            <h2>Toshloq</h2>
            <p>Tosh</p>
        </div>
      </div> */}
    </div>
  );
};

export default Modal;
