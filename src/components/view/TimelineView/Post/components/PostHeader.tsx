const PostHeader = () => {
  return (
    <div className="flex justify-between items-end">
      <div className="flex gap-2">
        <p className="font-bold text-primary-800">Erik Loocale</p>
        <div>
          <p className="text-primary-800 font-light text-[9px] inline">
            - di Kawah Putih, <span className="font-bold">Bandung</span>
          </p>
        </div>
      </div>
      <div>
        <p className="text-[9px] font-light">1 jam lalu</p>
      </div>
    </div>
  );
};

export default PostHeader