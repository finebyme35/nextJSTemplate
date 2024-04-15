
function AppHeader() {
  return (<>
    <header className='app-header'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 -mb-px'>
          <div className='flex items-center justify-between h-16 -mb-px'>
            <button className='text-slate-500 hover:text-slate-600 md:hidden' >
            </button>
            <div className="ml-2 text-xl block md:hidden">
              Template Logo
              
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div>
              <button className="bg-purple-50 hover:bg-purple-100  p-2 rounded-xl transition-all" >
              </button>
            </div>
            <div>
                <h1>Menu</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

  </>)
}
export default AppHeader;