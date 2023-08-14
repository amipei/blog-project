import Image from "next/image"
import githubIcon from './github.svg'
import mailIcon from './mail.svg'
import Link from "next/link"

export default () => {
  return (
    <aside className="w-[300px] bg-custom-primary">
      <div className="p-[20px] flex flex-col items-center h-[270px] bg-[url('./image/1.jpg')] bg-cover">
        <div className="w-[88px] h-[88px] rounded-full overflow-hidden">
          <img className="w-full h-full" src="/avter.png" alt="" />
        </div>
        <p className="text-2xl font-bold [text-shadow:_0_1px_8px_#8f8888] mt-4">amipei</p>
        <p className="text-sm font-semibold [text-shadow:_0_1px_8px_#8f8888] mt-1">Ask not of the date of return</p>
        <div className="w-[80px] flex justify-between mt-8">
          <a className="" href="https://github.com/amipei" target="_blank">
            <Image width={24} height={24} priority src={githubIcon} alt="github" />
          </a>
          <a href="mailto:amipei1020@gmail.com">
            <Image width={24} height={24} priority src={mailIcon} alt="email" />
          </a>

        </div>
      </div>
      <nav className="flex flex-col items-center pt-4">
        <Link className="w-[90%] hover:bg-active-bg p-3 pl-4 rounded-3xl" href={'/'}>
          首页
        </Link>
        <Link className="w-[90%] hover:bg-active-bg p-3 pl-4 rounded-3xl" href={'/about'}>
          关于我
        </Link>

      </nav>
    </aside>
  )
}/* Rectangle 1 */

