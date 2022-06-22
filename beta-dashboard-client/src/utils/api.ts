import { GetServerSidePropsContext } from "next";
import axios from 'axios';
import { validateCookies } from "./helper";

const API_URL = 'http://localhost/3001/api/auth'

export const fetchDiscordInfo = async (context: GetServerSidePropsContext) => {
  const headers = validateCookies(context)
  if(!headers) return { redirect: { destination : '/dashboard' } }

  try {
    const { data } = await axios.get(`${API_URL}/status`, { headers })
    return { props: { data }}
  } catch (err) {
    console.log(err)
    return { redirect: { destination: '/dashboard' } }
  }
}