import DatePicker from "components/DatePicker";
import Dropdown from "components/Dropdown";
import Input from "components/Input";
import InputMinMax from "components/InputMinMax";
import PhoneInput from "components/PhoneInput";
import { SelectColumnFilter } from "components/TableComponent/TableSelectColumnFilter";
import Switch from "components/Switch";
import Table from "components/TableComponent/Table";
import { StatusPill } from "components/TableComponent/TableStatusPill";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { carouselData, getData, testProgressBarData } from "utils/mockData";
import { AvatarCell } from "components/TableComponent/TableAvatarCell";
import ProgressStatus from "components/ProgressStatus";
import RichTextSunEditor from "components/RichTextSunEditor";
import baseFetchHook from "hooks/baseFetchHook";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import ProgressBar from "components/ProgressBar";
import Carousel from "components/Carousel";
import FormExample from "components/FormExampleWithReactHookForm";
import FormExampleWithInputComponent from "components/FormExampleWithInputComponent";

const mockData = [
  { id: 0, value: "1", label: "Select 1" },
  { id: 1, value: "2", label: "Select 2" },
  { id: 2, value: "3", label: "Select 3" },
];

export default observer(function Home({countries}: any) {
  const [getvalue, setValue] = useState("");
  const [getvalue1, setValue1] = useState("0");
  const [getvalue2, setValue2] = useState("0");
  const [getPrice, setPrice] = useState(0);
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState();
  const [getDateValue, setDateValue] = useState("");
  let [checked, setChecked] = useState(false);
  let [datas, setDatas] = useState();
  let [email, setEmail] = useState('johndoe@graphcms.com');
  const {filterStore, modalStore} = useStore();
  const { filter, getFilterData} = filterStore
  const {openModal, modal, closeModal} = modalStore
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
      
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Role",
        accessor: "role",
        Filter: SelectColumnFilter, // new
        filter: "includes", // new
      },
      {
        Header: "Age",
        accessor: "age",
      },
    ],
    []
  );
  const datass = useMemo(() => getData(), []);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(65)
  }, []);
    useMemo(() => {
      
      if(filter){
        // console.log(getFilterData(datass, "Admin"))

      }
    },[])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Input
          getValue={getPrice}
          setValue={setPrice}
          wrapClassName="rounded-xl p-5 mb-5"
          onlyFieldRequired="Currency"
        />
        <Input
          password={true}
          passwordType={{ color: "red", size: 16, wrapClassName: "" }}
          getValue={getvalue}
          setValue={setValue}
          maxLength={10}
          wrapClassName="rounded-xl p-5"
          leftEye={false}
          type={"password"}
        />
        <InputMinMax
          insideWrapClassNameMax="rounded-xl p-5 border"
          insideWrapClassNameMin="rounded-xl p-5 border"
          getValueMin={getvalue1}
          setValueMin={setValue1}
          getValueMax={getvalue2}
          setValueMax={setValue2}
          childMaxLength={7}
          childMinLength={7}
          childOnlyFieldRequiredMax="Number"
          childOnlyFieldRequiredMin="Number"
        />
        <PhoneInput />
        <Dropdown
          placeHolder="Select..."
          options={mockData}
          selectedArrayValue={selectedValue}
          setSelectedValue={setSelectedValue}
          isMulti={true}
          outsideClickClassName="div.dropdown-menu"
          isSearchable
        />
        <div className="mt-[15px]">
          <Dropdown
            placeHolder="Select..."
            options={mockData}
            selectedValue={selectedValue1}
            setSelectedValue={setSelectedValue1}
            isMulti={false}
            outsideClickClassName="div.dropdown-menu"
            isSearchable
          />
        </div>
        <DatePicker setValue={setDateValue} getValue={getDateValue} />
        <Switch
          name="Toggle"
          id="toggleSwitch"
          checked={checked}
          setChecked={setChecked}
          dataYes="Yes"
          dataNo="No"
        /> */}
         <DatePicker setValue={setDateValue} getValue={getDateValue} />
        <Table columns={columns} data={datass} />
        {/* <ProgressStatus /> */}
        {/* <RichTextSunEditor data={datas} setData={setDatas}/> */}
        <><button onClick={() => openModal(<Stateless />)}>Open</button></>
        <><button onClick={() => closeModal()}>Close</button></>
        {modal.body}
        <ProgressBar  bgcolor={"#24af"} completed={completed} />
        <Carousel carouselData={carouselData}/>
        <FormExample />
        <FormExampleWithInputComponent />
      </main>
    </>
  );
})

const Stateless = () => {
  return(
    <div>modal</div>
  )
}