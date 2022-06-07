// upload image to cloudinary
export const fileUpload = async (file) => {
  const url = "https://api.cloudinary.com/v1_1/dp9zv16le/upload";
  const formdata = new FormData();
  formdata.append("upload_preset", "imagesDeliveryFood");
  formdata.append("file", file);
  formdata.append("cloud_name", "dp9zv16le");

  const res = await fetch(url, {
    method: "POST",
    body: formdata,
  });
  const data = await res.json();
  return data;
};
