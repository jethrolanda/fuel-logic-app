import { Radio, Checkbox, Space, Input, DatePicker } from "antd";
import locationImg from "../../images/Location.png";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import gate from "../../images/gate.png";
import { useSelector } from "react-redux";
import { icon } from "leaflet";
import pin from "../../images/pin.png";

const { TextArea } = Input;

const onFinish = (values) => {
  // console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ICON = icon({
  iconUrl: pin,
  iconSize: [32, 32]
});

const StepContent = (props) => {
  const { page, contents, next } = props;

  const coordinates = useSelector((state) => state.mapState.currentCoordinates);
  const location = useSelector((state) => state.mapState.currentLocation);

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };
  let counter = 0;
  return (
    <div style={{ padding: 20 }}>
      {/* <Form
            name="basic"
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          > */}
      {contents.map((content) => {
        if (page + 1 !== content.pageNumber) return;

        switch (content.type) {
          case "html":
            if (counter === 0) {
              counter++;
              return (
                <div className="headings" style={{}}>
                  <img src={locationImg} />
                  <div dangerouslySetInnerHTML={{ __html: content.content }} />
                </div>
              );
            } else {
              switch (content.content) {
                case "delivery address":
                  return (
                    <>
                      <h5>DELIVERY ADDRESS</h5>
                      <p className="address">{location}</p>
                      <MapContainer
                        style={{ height: "300px" }}
                        center={coordinates}
                        zoom={13}
                        scrollWheelZoom={true}
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={coordinates} icon={ICON} />
                      </MapContainer>
                    </>
                  );
                case "delivery notes":
                  return (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p className="chat left">
                        What do we need to know about this site? Is the yard
                        locked? Is there a combination? Where is the equipment
                        parked, etc…
                      </p>
                      <p className="chat right">
                        Here is the order note. The gate is locked and a dog..
                      </p>
                      <img src={gate} alt="Gate" style={{ alignSelf: "end" }} />
                      <p className="chat right">
                        Here is a picture of the gate on the left side of the
                        building..
                      </p>

                      <TextArea rows={4} placeholder="Type a notes" />
                    </div>
                  );
                default:
                  return (
                    <div
                      dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                  );
              }
            }

          case "radio":
            return (
              <>
                <label>{content.label}</label>
                <p>
                  <Radio.Group onChange={onChange} style={{ fontSize: "16px" }}>
                    <Space direction="vertical">
                      {Object.keys(content.choices).map((i) => {
                        return (
                          <Radio key={i} value={content.choices[i].text}>
                            {content.choices[i].text}
                          </Radio>
                        );
                      })}
                    </Space>
                  </Radio.Group>
                </p>
              </>
            );
          case "page":
            return;
          case "checkbox":
            return (
              <>
                <label>{content.label}</label>
                <p>
                  <Checkbox.Group
                    onChange={onChange}
                    style={{ fontSize: "16px" }}
                  >
                    <Space direction="vertical">
                      {Object.keys(content.choices).map((i) => {
                        return (
                          <Checkbox key={i} value={content.choices[i].text}>
                            {content.choices[i].text}
                          </Checkbox>
                        );
                      })}
                    </Space>
                  </Checkbox.Group>
                </p>
              </>
            );
          case "text":
          case "phone":
            return (
              <p>
                <label>{content.label}</label>
                <Input placeholder={content.placeholder} />
              </p>
            );

          // return <Form.Item
          //   label={content.label}
          //   name={content.label}
          //   rules={[
          //     {
          //       required: true,
          //       message: 'required!',
          //     },
          //   ]}
          // >
          //   <Input />
          // </Form.Item>

          case "date":
            return (
              <>
                <label>{content.label}</label>
                <p>
                  <DatePicker onChange={onChange} style={{ width: "100%" }} />
                </p>
              </>
            );
          case "email":
            return (
              <p>
                <label>{content.label}</label>
                <Input />
              </p>
            );
        }
      })}
      {/* <Button type="primary" className="secondary-btn" onClick={() => next()}>
            Next Step
          </Button> */}
      {/* </Form> */}
    </div>
  );
};

export default StepContent;
