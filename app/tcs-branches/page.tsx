export default function TCSBranchesPage() {
    return <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to Home Link */}
        <div className="mb-6">
            <a
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
            </a>
        </div>

        {/* Header */}
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Searchable TCS branches list with contact number and address
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            You can search from searchable TCS branches list to get contact number and address
            </p>
        </header>
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 space-y-8">
            <table id="tcs-branches" style={{
                border: "1px solid black",
                borderCollapse: "collapse"

            }} >
                <thead>
                    <tr>
                        <th>Branch Name</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Katlang
                        </td>
                        <td>Mardan</td>
                        <td>3169992890</td>
                        <td>Saeed Khan Market Main Bazar Katlang Peshawar</td>
                    </tr>
                    <tr>
                        <td>Muzaffargarh Express Center</td>
                        <td>Muzaffargarh</td>
                        <td>3169992704</td>
                        <td>Jhang Road Near JS Bank Muzaffargarh</td>
                    </tr>
                    <tr>
                        <td>Aminpur Banglow</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Dubai Mobile Aminpur Bangla Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Chak Jhumra</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Main Mochi Bazar Chak Jhumra Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Narwala Bangla</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Tariq Communications Amin Pur Road Narwala Bangla Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Painsra</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Jhang Road Wahid Market Doctor Faqeer Hussain Wali Painsra Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Satiana Bangla</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>United Franchise &amp; Co. Near UBL Satiana Bangla Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Sangla Hill</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Ciruclar Road House No. 17/30 Sangla Hill Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Tandlianwala</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Quaid-e-Azam Road Near Post Office Near Lari Adda Tandlianwala Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Kundian</td>
                        <td>Faisalabad</td>
                        <td>N/A</td>
                        <td>Hadayat Shaheed Bazar Faisal Chowk Kundian</td>
                    </tr>
                    <tr>
                        <td>Harrianwala Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>270 -B Harrianwala Chowk Near Shaukat Fabrics Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Jhang Road Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Chenab Chowk Near Government University Faisalabad</td>
                    </tr>
                    <tr>
                        <td>MILLAT CHOWK EXPRESS CENTRE</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Plot No. 358-A Gulistan Colony Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Clock Tower Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>P. No. 6/1 Karkhana Bazar Clock Tower Faisalabad</td>
                    </tr>
                    <tr>
                        <td>MADINA TOWN Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>P-981 Main Susan Road Near Faizan-e-Madina Faisalabad</td>
                    </tr>
                    <tr>
                        <td>GHULAM MUHAMMAD ABAD</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Shop No. 1460/B Civil Quarters Ghulam Muhammad Abad Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Factory Area Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Shop No. 28 Factory Area Sitara Plaza Faisalabad</td>
                    </tr>
                    <tr>
                        <td>D-Type Colony Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Shop No. 1671/B D-Type Colony Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Koh-i-Noor City Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Shop No. 15 Sitara Institute Plaza Opposite Mediacom City Kohinoor Chowk Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Raja Chowk Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Property No. 507-B Peoples Colony No. 2 Raja Chowk Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Shahdab More Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Saifabad Chungi No. 12 Jhang Road Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Saleemi Chowk Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>580-B Main Satiana Road Saleemi Chowk Faisalabad</td>
                    </tr>
                    <tr>
                        <td>PMC Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Masjid Ismail Road Shop No. 7 Near Honda Chenab Showroom Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Jinnah Colony Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>P-532 Street No. 1 Gowind Pura Main Gulberg Road Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Jamia Chishtia Lari Adda Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Shop No. 1 &amp; 2 Jamia Chistia Chowk Sarghoda Road Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Samanabad Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Plot No. 675-A Main Samanabad Road Samanabad Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Jaranwala Road Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Shop No. 2 Rehman Market Near Meezan Bank Dudhiwala Jaranwala Road Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Sargodha Road Express Center</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Murabba # 59, Killa # 1M.75, SGD Road FSD, Pearl City Plaza</td>
                    </tr>
                    <tr>
                        <td>Nishatabad Express Center</td>
                        <td>Faisalabad</td>
                        <td>N/A</td>
                        <td>Bhatta Stop, Mian Lahore Road, Nishatabad, FSD</td>
                    </tr>
                    <tr>
                        <td>Airport Chowk</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>The Zone Photostate &amp; Studio Airport Chowk Jhang Road Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Sadhar Adda</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Taj Rehmani Travels Jhang Road Adda Sadhar Faisalabad</td>
                    </tr>
                    <tr>
                        <td>Qaim Bharwana</td>
                        <td>Faisalabad</td>
                        <td>3169992870</td>
                        <td>Waryam Chowk, P/O Qaim Bharwana, Tehsil Shorkot, Dist Jhang.</td>
                    </tr>
                    <tr>
                        <td>Pindi Gheb</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>Main Pindora Chowk Pindi Gheb Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Kahuta</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Main Pindi Road, Near 5 Star CNG. Landmarks, Girls High School &amp; College RWP</td>
                    </tr>
                    <tr>
                        <td>MAIN EXPRESS CENTER</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>11-Kashmir Road Saddar Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>CHAKLALA EXPRESS CENTER</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>Shop No. 1 Ground Floor Ch. Khudada Plaza Commercial Market Chaklala Scheme 3 Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Chandani Chowk Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Shop No. 6 Bilal Plaza Chandni Chowk Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>KHANNA EXPRESS CENTER</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Tcs Regional Office Near Fazaia Colony Link Road Khana Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Khayaban Sir Syed Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>Shop No. B-1 Masood Plaza Opposite Govt. Degree College For Women Khayaban-e-Sir Syed Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Golra More Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>Shop No. 3 Awan Market Main Golra More Stop Rawalpindi Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Bakramandi Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>Sadiq Plaza Opp Mian Sardar Milk Shop Kalma Chowk Dhamial Road Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Range Road Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>Opposite Byco Pump Range Road Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>6th Road Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Shop No. B2B Royal Center 6Th Road Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>PWD Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Plot No. 1 Main Double Road PWD Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>DHA II EXPRESS CENTER</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>Shop No. 2 Ch. Plaza Near Amazon Mall Opposite Bar B.Q. Tonight GT Road Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Adayala Road Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>Shop No. 2 Mubarak Masjid Opposite Shell Pump Adalaya Road Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>BAHRIA PHASE 8 EXPRESS CENTER</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>Assets 4 Rafi Comercial Shaheen Chowk Phase 8 Bahria Town Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Gulraiz Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Shop No. 1 Mustansar Plaza St No. 4 Gulraiz Commercial Market Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Liaqat Bagh Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Shop No. J-256/B Main Murree Road Liaquat Bagh Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Saidpur Road Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Shop No. 1 Ground Floor Aftab Plaza Main Saidpur Road Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Peshawar Road Express Centre</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>
                            TCS Office Chur Chowk, Main Peshawar Road, Near Bank Alfalah, Rawalpindi
                        </td>
                    </tr>
                    <tr>
                        <td>LALKURTI EXPRESS CENTER</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>251-B Tamizuddin Road Opposite CSD Lalkurti Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Gulzar-e-Quaid Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Shop No. 3 Ground Floor Al Kausar Plaza Opposite Madina CNG Gulzar-e-Quaid Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Raja Bazar Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>AA-748 Hamilton Road Near MCB Bank Raja Bazar Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Bahria Town Phase 4 Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Shop No. 6 Lower Ground Plaza 181, Civic Center, Phase 4, Bahria Town Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Commercial Market Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Mukhtar-un-Nisa Plaza Near Ariyana Shinwari Shop No. B-576 Satellite Town Commercial Market Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>BAHRIA PHASE 7 EXPRESS CENTER</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>Shop No. 1 Mini Comercial No. 5 Next To Summit Bank Bahria Town Phase 7 Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Tipu Road</td>
                        <td>Rawalpindi</td>
                        <td>3169992925</td>
                        <td>Shop No.2, opposite Waqar-Un-Nisa Girls College, near RMC, Main Tipu Road, Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Shaheen Plaza Sadiqbad EC</td>
                        <td>Rawalpindi</td>
                        <td>N/A</td>
                        <td>Shop # 1 Shaheen Plaza Sadiqbad RWP</td>
                    </tr>
                    <tr>
                        <td>Fateh Jang Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992642</td>
                        <td>Near Almas Medical Center Main Pindi Road Fateh Jang Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Ghouri Town Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992691</td>
                        <td>Plot No. C-42 Ghouri Town Phase 5-A Near Kalma Chowk Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Kurri Road Express Center</td>
                        <td>Rawalpindi</td>
                        <td>3169992691</td>
                        <td>New Mall Bahria Enclave Road Chak Shehzad Road Islamabad Rawalpindi</td>
                    </tr>
                    <tr>
                        <td>Hangu</td>
                        <td>Hangu</td>
                        <td>3169992890</td>
                        <td>Main Chowk Basement Bank Alfalah Hangu Peshawar</td>
                    </tr>
                    <tr>
                        <td>Noor Kot Narowal</td>
                        <td>Narowal</td>
                        <td>3169992866</td>
                        <td>Noorkot, Opp City Electronics, Cantt, Dist Norowal</td>
                    </tr>
                    <tr>
                        <td>Shakar Garh</td>
                        <td>Narowal</td>
                        <td>3169992866</td>
                        <td>Near Rehmani Masjid Shakargarh Narowal</td>
                    </tr>
                    <tr>
                        <td>Zafarwal</td>
                        <td>Narowal</td>
                        <td>3169992866</td>
                        <td>Near Admore Petrol Pump NRL Road Zafarwal Narowal</td>
                    </tr>
                    <tr>
                        <td>Narowal Express Center</td>
                        <td>Narowal</td>
                        <td>3169992866</td>
                        <td>Opposite Noman Masjid Narowal</td>
                    </tr>
                    <tr>
                        <td>Hassan Abdal</td>
                        <td>Hassan Abdal</td>
                        <td>3169992881</td>
                        <td>Opposite Raja Buss Stand Abbottabad More Hassan Abdal</td>
                    </tr>
                    <tr>
                        <td>BHAWALNAGAR EXPRESS CENTER</td>
                        <td>Bahawalnagar</td>
                        <td>3169992892</td>
                        <td>Near Al Qureish Marriage Hall Chishtian Road Bahawalnagar</td>
                    </tr>
                    <tr>
                        <td>Tando Muhammad Khan Express Center</td>
                        <td>Tando Muhammad Khan</td>
                        <td>3169993026</td>
                        <td>Al-Fateh Chowk Adjacent Habib Bank Station Road Tando Muhammad Khan</td>
                    </tr>
                    <tr>
                        <td>Ghotki</td>
                        <td>Ghotki</td>
                        <td>N/A</td>
                        <td>Main National Highway, Way Old Shelton Hofel, Ghotki</td>
                    </tr>
                    <tr>
                        <td>Ghotki Express Center</td>
                        <td>Ghotki</td>
                        <td>3169992869</td>
                        <td>Near Ghota Hospital Ghotki</td>
                    </tr>
                    <tr>
                        <td>Daynor</td>
                        <td>Gilgit</td>
                        <td>3169992925</td>
                        <td>Main Chowk Near Bank Al Habib Daynor Gilgit</td>
                    </tr>
                    <tr>
                        <td>Gahkuch</td>
                        <td>Gilgit</td>
                        <td>3169992925</td>
                        <td>Musa Market Near Soneri Bank Gahkuch Gilgit</td>
                    </tr>
                    <tr>
                        <td>Hunza</td>
                        <td>Gilgit</td>
                        <td>3169992925</td>
                        <td>1st Floor Near Soneri Bank</td>
                    </tr>
                    <tr>
                        <td>GILGIT EXPRESS CENTER</td>
                        <td>Gilgit</td>
                        <td>3169992925</td>
                        <td>Shop No. 5 Dar Plaza Nabi Bazar Gilgit</td>
                    </tr>
                    <tr>
                        <td>JUTIAL EXPRESS CENTER</td>
                        <td>Gilgit</td>
                        <td>3169992925</td>
                        <td>CSD Shopping Complex Near PIA Booking Office Jutial Gilgit</td>
                    </tr>
                    <tr>
                        <td>Jutial</td>
                        <td>Gilgit</td>
                        <td>3169992925</td>
                        <td>Shop # 09, Amin Shah Market, Near Family Health Jutual Gilgit</td>
                    </tr>
                    <tr>
                        <td>LARKANA EXPRESS CENTER</td>
                        <td>Larkana</td>
                        <td>3169992869</td>
                        <td>Sachal Colony Near Asifa Bhutto Park Larkana</td>
                    </tr>
                    <tr>
                        <td>BURGARI PLAZA EXPRESS CENTER</td>
                        <td>Larkana</td>
                        <td>3169992869</td>
                        <td>Shop No. 12 Burghari Plaza Larkana</td>
                    </tr>
                    <tr>
                        <td>Pakpattan Express Center</td>
                        <td>Pakpattan</td>
                        <td>3169992892</td>
                        <td>College Road Near Waseela Bank Pakpattan</td>
                    </tr>
                    <tr>
                        <td>Miani Adda</td>
                        <td>Chakwal</td>
                        <td>3169992642</td>
                        <td>Madni Book Depot Miani Adda Chakwal</td>
                    </tr>
                    <tr>
                        <td>Choa Syden Shah</td>
                        <td>Chakwal</td>
                        <td>3169992642</td>
                        <td>Makka Market, Shop # 03, Chakwal Road, Chao Saiden Shah</td>
                    </tr>
                    <tr>
                        <td>Ghalla Mandi Express Center</td>
                        <td>Chakwal</td>
                        <td>3169992642</td>
                        <td>Ghalla Mandi Chowk Opposite Shell Petrol Pump Talagang Road Chakwal</td>
                    </tr>
                    <tr>
                        <td>Chakwal Express Center</td>
                        <td>Chakwal</td>
                        <td>3169992642</td>
                        <td>Main Phatak Chowk Pind By Pass Road Chakwal</td>
                    </tr>
                    <tr>
                        <td>Chappar Chowk</td>
                        <td>Chakwal</td>
                        <td>3169992642</td>
                        <td>Ameen Commercial Plaza Near Chappar Chowk Chakwal</td>
                    </tr>
                    <tr>
                        <td>KHANEWAL EXPRESS CENTER</td>
                        <td>Khanewal</td>
                        <td>3169992892</td>
                        <td>5-B Hakimabad Civil Line Near Dr.Zafar Laser Eye Clinic Chak Shana Road Khanewal</td>
                    </tr>
                    <tr>
                        <td>Post Office Road Express Center</td>
                        <td>Khanewal</td>
                        <td>3169992892</td>
                        <td>Shop No. 4 Ibrahim Center Girls College Chowk Khanewal</td>
                    </tr>
                    <tr>
                        <td>Thatta Express Center</td>
                        <td>Thatta</td>
                        <td>3169993026</td>
                        <td>Opposite Nadra Office National Road Thatta</td>
                    </tr>
                    <tr>
                        <td>Shaheed Chowk</td>
                        <td>Kotli</td>
                        <td>3169992925</td>
                        <td>Oppo. Officers Colony Near Neelum Hotel Shaheed Chowk Kotli</td>
                    </tr>
                    <tr>
                        <td>Darosh</td>
                        <td>Chitral</td>
                        <td>N/A</td>
                        <td>Nearest HBL Main Darosh Bazar, Darosh.</td>
                    </tr>
                    <tr>
                        <td>Shabqadar</td>
                        <td>Charsadda</td>
                        <td>3169992890</td>
                        <td>Khaista Communications Near UBL Shabqadar Peshawar</td>
                    </tr>
                    <tr>
                        <td>Taunsa Sharif</td>
                        <td>Multan</td>
                        <td>3169992704</td>
                        <td>Ward # 09, Kot Addu</td>
                    </tr>
                    <tr>
                        <td>Shah Saddar Din</td>
                        <td>Multan</td>
                        <td>N/A</td>
                        <td>Indus Highway, Shah Saddar Din</td>
                    </tr>
                    <tr>
                        <td>AREA OFFICE MUX</td>
                        <td>Multan</td>
                        <td>3169992892</td>
                        <td>985/B Tareen Road Multan</td>
                    </tr>
                    <tr>
                        <td>QAZAFI CHOWK EXPRESS CENTER</td>
                        <td>Multan</td>
                        <td>3169992704</td>
                        <td>Near Bank Of Punjab Qazafi Chowk Multan</td>
                    </tr>
                    <tr>
                        <td>Bosan Road Express Center</td>
                        <td>Multan</td>
                        <td>3169992892</td>
                        <td>Shop No. 11 Rahman Plaza Bosan Road Multan</td>
                    </tr>
                    <tr>
                        <td>Chowk Rashidabad Express Center</td>
                        <td>Multan</td>
                        <td>3169992704</td>
                        <td>Shop No. 9 City Plaza Khanewal Road Opposite Allied Bank Near Rasheedabad Chowk Multan</td>
                    </tr>
                    <tr>
                        <td>MDA Chowk Express Center</td>
                        <td>Multan</td>
                        <td>3169992892</td>
                        <td>Shop No. 29 Bamazai Plaza Near Mobilink Franchise Near MDA Chowk Multan</td>
                    </tr>
                    <tr>
                        <td>Chungi No.1 Express Center</td>
                        <td>Multan</td>
                        <td>3169992892</td>
                        <td>Chowk Chungi No. 1 Suragmiani Road Multan</td>
                    </tr>
                    <tr>
                        <td>Bahauddin Zakariya University Express Center</td>
                        <td>Multan</td>
                        <td>3169992892</td>
                        <td>Shop No. 6 Students Center Near HBL Bahauddin Zakariya University Multan</td>
                    </tr>
                    <tr>
                        <td>Mall Road Express Center</td>
                        <td>Multan</td>
                        <td>3169992704</td>
                        <td>Shop No. 13 Dubai Plaza Mall Road Cantt. Multan</td>
                    </tr>
                    <tr>
                        <td>Garden Town Express Center</td>
                        <td>Multan</td>
                        <td>3169992704</td>
                        <td>Shop No. 6 Al - Hussain Plaza Near Zanbiya School Garden Town Shershah Road Multan</td>
                    </tr>
                    <tr>
                        <td>Ghalla Mandi Express Center</td>
                        <td>Multan</td>
                        <td>3169992704</td>
                        <td>Shop No. 4 Al Janat Market Chowk Shahbaz Multan</td>
                    </tr>
                    <tr>
                        <td>Nishtar Chowk Express Center</td>
                        <td>Multan</td>
                        <td>3169992704</td>
                        <td>Fatima Tower Nishter Chowk Multan</td>
                    </tr>
                    <tr>
                        <td>Trust Plaza Express Center</td>
                        <td>Multan</td>
                        <td>3169992704</td>
                        <td>Shop No. 4/A Upper Ground Floor Trust Plaza Opposite PTCL Exchange LMQ Road Dera Adda Multan</td>
                    </tr>
                    <tr>
                        <td>Chowk Shah Rukn-e-Alam Express Center</td>
                        <td>Multan</td>
                        <td>3169992704</td>
                        <td>Shop No. 207 - D Main Market Street No. 7 Opposite HBL Shah Rukn-e-Alam Multan</td>
                    </tr>
                    <tr>
                        <td>Naz Cinema Express Center</td>
                        <td>Multan</td>
                        <td>3169992892</td>
                        <td>Near Naz Cinema Opposite Zafar Dairy Near Double Phatak Multan</td>
                    </tr>
                    <tr>
                        <td>Bahawalpur Bypass Express Center</td>
                        <td>Multan</td>
                        <td>3169992892</td>
                        <td>Shop No. 79 Ali Commercial Centre Bahawalpur ByPass Chowk Multan</td>
                    </tr>
                    <tr>
                        <td>Mumtazabad Express Center</td>
                        <td>Multan</td>
                        <td>3169992892</td>
                        <td>Shop No. A-1 Hamid Commercial Centre Mumtazabad Multan</td>
                    </tr>
                    <tr>
                        <td>Gulshan Market Express Center</td>
                        <td>Multan</td>
                        <td>3169992704</td>
                        <td>Ali Plaza Opposite Madni Park Gulshan Market Multan</td>
                    </tr>
                    <tr>
                        <td>Wapda Town</td>
                        <td>Multan</td>
                        <td>N/A</td>
                        <td>Shop # 221-A, Model Town Market, Commercial Area, Multan</td>
                    </tr>
                    <tr>
                        <td>ABOTTABAD EXPRESS CENTRE</td>
                        <td>Abbottabad</td>
                        <td>3169992691</td>
                        <td>Shop No. 2 Near Kaghan Cafe Jinnah Road Abbottabad Cantt.</td>
                    </tr>
                    <tr>
                        <td>YOUSAF JAMAL PLAZA EXPRESS CEN</td>
                        <td>Abbottabad</td>
                        <td>3169992691</td>
                        <td>Yousaf Jamal Plaza Main Mansehra Road Abbottabad</td>
                    </tr>
                    <tr>
                        <td>Dadu Express Center</td>
                        <td>Dadu</td>
                        <td>3169993026</td>
                        <td>Buxal Khan Mallah Shopping Center Shop No. 1 Opposite Govt. Girls College Dadu</td>
                    </tr>
                    <tr>
                        <td>Kalaskay</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Near Govt. Girls High School Kalaskay Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Nowshera Virkan</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Near NBP Nowshera Virkan Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Qila Dedar Singh</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Near Zong &amp; Ufone Franchise Qila Didar Singh Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Dhamtal</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Mohi Chandni Chowk Dhamtal</td>
                    </tr>
                    <tr>
                        <td>Sara-e-Alamgir</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Panjeri Complex Mall, Sare-e -Alamgir</td>
                    </tr>
                    <tr>
                        <td>SATELLITE TOWN EXPRESS CENTER</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Opposite Kutchery Butta Center Gujranwala</td>
                    </tr>
                    <tr>
                        <td>GUJ CANTT EXPRESS CENTRE</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Opposite Rachna CNG Station Cantt. Gujranwala</td>
                    </tr>
                    <tr>
                        <td>G.T.ROAD EXPRESS CENTRE</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Beside Ice Tech &amp; Pizza Cottage Trust Plaza Gujranwala</td>
                    </tr>
                    <tr>
                        <td>AREA OFFICE GUJ E/C G.T.ROAD</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Beside HBL Sheranwala Branch GT Road Gujranwala</td>
                    </tr>
                    <tr>
                        <td>NEW AREA OFFICE EXPRESS CENTER</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Opposite Jamia Azizia &amp; Super Asia GT Road Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Chan Da Qila Express Center</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Beside Gourmet Bakers Chan Da Qila Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Crown Cinema Chowk Express Center</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Opposite Rehan Masjid Crown Cinema Chowk Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Main GT Road Rahwali Express Center</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Beside Rah Wali Gate Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Model Town Express Center</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Opposite Jinnah Hospital Model Town Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Sheikhupura Road Express Center</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Near MCB Branch Sheikhupura Road Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Timber Market Express Center</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Ghanta Ghar Beside Thana Gujranwala</td>
                    </tr>
                    <tr>
                        <td>People Colony Express Center</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Opposite Zain Bakery People Colony Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Farid Town Express Center</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Beside Bakes &amp; Well Farid Town Chowk Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Sialkot Bypass Express Center</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Opposite Rescue 1122 Sialkot By Pass Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Guj Road Hafizabad Express Center</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>GUJ Road Near Zari Traqati bank HZD Gujranwala</td>
                    </tr>
                    <tr>
                        <td>City Housing</td>
                        <td>Gujranwala</td>
                        <td>N/A</td>
                        <td>House No 8537, BV-3, Mohallah Urdu Bazar, GUJ.</td>
                    </tr>
                    <tr>
                        <td>Sarhang Market</td>
                        <td>Gujranwala</td>
                        <td>3169992866</td>
                        <td>Shop 2 Haji Corporation Buraq Market Cantt. Gujranwala</td>
                    </tr>
                    <tr>
                        <td>Municipal Road Express Center</td>
                        <td>Jacobabad</td>
                        <td>3169992869</td>
                        <td>Municipal Road Near Gul Clinic Shikarpur Road Jacobabad</td>
                    </tr>
                    <tr>
                        <td>Kandhkot Express Center</td>
                        <td>Kandhkot</td>
                        <td>3169992869</td>
                        <td>Main Road Kandhkot</td>
                    </tr>
                    <tr>
                        <td>More Khunda</td>
                        <td>Jaranwala</td>
                        <td>3169992870</td>
                        <td>Main Lahore Road Near Allied Bank More Khunda Jaranwala</td>
                    </tr>
                    <tr>
                        <td>Bucheki</td>
                        <td>Jaranwala</td>
                        <td>3169992870</td>
                        <td>Near HBL Lahore Jaranwala Road Tor Market Bucheki Jaranwala</td>
                    </tr>
                    <tr>
                        <td>Jaranwala Express Center</td>
                        <td>Jaranwala</td>
                        <td>3169992870</td>
                        <td>Shop No. 2 Nia Bazar Jaranwala</td>
                    </tr>
                    <tr>
                        <td>KUTACHERY ROAD EXPRESS CENTER</td>
                        <td>Okara</td>
                        <td>3169992892</td>
                        <td>Opposite MCB Main Branch Ravi Road Okara</td>
                    </tr>
                    <tr>
                        <td>Okara Express Center</td>
                        <td>Okara</td>
                        <td>3169992892</td>
                        <td>Opposite Satluj Girls High School Main GT Road Okara</td>
                    </tr>
                    <tr>
                        <td>Faisalabad Road</td>
                        <td>Okara</td>
                        <td>3169992892</td>
                        <td>Rehmatullah Town Main Faislabad Town Okara</td>
                    </tr>
                    <tr>
                        <td>Usta Muhammad</td>
                        <td>Sukkur</td>
                        <td>3169992869</td>
                        <td>Near National Bank of Pakistan</td>
                    </tr>
                    <tr>
                        <td>Sarhad</td>
                        <td>Sukkur</td>
                        <td>3169992869</td>
                        <td>Main Bazar, Near MCB Bank, Sarhad District, Ghotki</td>
                    </tr>
                    <tr>
                        <td>PAF BASE</td>
                        <td>Sukkur</td>
                        <td>3169992869</td>
                        <td>PAF Base Shahbaz Jacobabad</td>
                    </tr>
                    <tr>
                        <td>MILITARY ROAD EXPRESS CENTRER</td>
                        <td>Sukkur</td>
                        <td>3169992869</td>
                        <td>Military Road Sukkur</td>
                    </tr>
                    <tr>
                        <td>MINARA ROAD EXPRESS CENTER</td>
                        <td>Sukkur</td>
                        <td>3169992869</td>
                        <td>Islamic Center Minara Road Sukkur</td>
                    </tr>
                    <tr>
                        <td>CLOCK TOWER EXPRESS CENTER</td>
                        <td>Sukkur</td>
                        <td>3169992869</td>
                        <td>Clock Tower Sukkur</td>
                    </tr>
                    <tr>
                        <td>MAIN AREA OFFICE EC SUKKUR</td>
                        <td>Sukkur</td>
                        <td>3169992869</td>
                        <td>Near Atta Hussain collage Express Center Sanam Bhutto Mills Rohri By Pass</td>
                    </tr>
                    <tr>
                        <td>BUNDER ROAD EXPRESS CENTER</td>
                        <td>Sukkur</td>
                        <td>3169992869</td>
                        <td>Garilio Resturant</td>
                    </tr>
                    <tr>
                        <td>Gol Market</td>
                        <td>Bagh</td>
                        <td>3169992925</td>
                        <td>Gol Market Gol Market Main Bazar</td>
                    </tr>
                    <tr>
                        <td>Bhimber</td>
                        <td>Gujrat</td>
                        <td>3169992866</td>
                        <td>Opposite Insight Model College Bhimber Gujrat</td>
                    </tr>
                    <tr>
                        <td>Dolat Nagar</td>
                        <td>Gujrat</td>
                        <td>3169992866</td>
                        <td>Bus Stand Dolat Nagar Gujrat</td>
                    </tr>
                    <tr>
                        <td>Jalalpur Jattan</td>
                        <td>Gujrat</td>
                        <td>3169992866</td>
                        <td>Opposite NBP Jalalpur Jattan Gujrat</td>
                    </tr>
                    <tr>
                        <td>Kotla</td>
                        <td>Gujrat</td>
                        <td>3169992866</td>
                        <td>Langrial Chowk Kotla Gujrat</td>
                    </tr>
                    <tr>
                        <td>Mangowal</td>
                        <td>Gujrat</td>
                        <td>3169992866</td>
                        <td>Bus Stand Mangowal Gujrat</td>
                    </tr>
                    <tr>
                        <td>Barnala A.K</td>
                        <td>Gujrat</td>
                        <td>3169992866</td>
                        <td>City Center Barnala Gujrat</td>
                    </tr>
                    <tr>
                        <td>G.T.ROAD EXPRESS CENTER</td>
                        <td>Gujrat</td>
                        <td>3169992866</td>
                        <td>Opposite Faisal Hotel Gujrat</td>
                    </tr>
                    <tr>
                        <td>Kutchary Road Express Center Gujrat</td>
                        <td>Gujrat</td>
                        <td>3169992866</td>
                        <td>Opposite Stadium Kutchery Chowk Gujrat</td>
                    </tr>
                    <tr>
                        <td>GUJRAT EXPRESS CENTRE</td>
                        <td>Gujrat</td>
                        <td>3169992866</td>
                        <td>Opposite Royal Fan GT Road Gujrat</td>
                    </tr>
                    <tr>
                        <td>Havelian</td>
                        <td>Islamabad</td>
                        <td>3169992691</td>
                        <td>Ameer Muhavia Chowk, Malik Plaza Havelian</td>
                    </tr>
                    <tr>
                        <td>B 17</td>
                        <td>Islamabad</td>
                        <td>N/A</td>
                        <td>Shop # 10, LG Portion, Squares Apartment, Gate # 01, B-17, Near Allied Bank.</td>
                    </tr>
                    <tr>
                        <td>Gulberg Green</td>
                        <td>Islamabad</td>
                        <td>N/A</td>
                        <td>Shop # LG -5, Samaama Mall, Gulberg Green Islamabad.</td>
                    </tr>
                    <tr>
                        <td>G-9 EXPRESS CENTER</td>
                        <td>Islamabad</td>
                        <td>3169992691</td>
                        <td>Shop 2 Ground Floor Laraib Plaza G-9 Markaz Islamabad</td>
                    </tr>
                    <tr>
                        <td>AABPARA EXPRESS CENTRE</td>
                        <td>Islamabad</td>
                        <td>3169992691</td>
                        <td>Shakeel Express Building Khayaban-e-Soharwardi Aabpara Islamabad</td>
                    </tr>
                    <tr>
                        <td>BLUE AREA EXPRESS CENTRE</td>
                        <td>Islamabad</td>
                        <td>3169992691</td>
                        <td>Shop22 Hajvery Mansion China Chowk Blue Area Islamabad</td>
                    </tr>
                    <tr>
                        <td>G-8 EXPRESS CENTER</td>
                        <td>Islamabad</td>
                        <td>3169992691</td>
                        <td>Shop 7 Ground Floor Executive Complex G-8 Markaz Islamabad</td>
                    </tr>
                    <tr>
                        <td>I-9 EXPRESS CENTRE</td>
                        <td>Islamabad</td>
                        <td>3169992881</td>
                        <td>Plot No. 394-A Pothohar Road Near Police Station Sector I-9/3 Islamabad</td>
                    </tr>
                    <tr>
                        <td>F-10 EXPRESS CENTRE</td>
                        <td>Islamabad</td>
                        <td>3169992881</td>
                        <td>Shop 3 &amp; 4 Amanat Plaza F-10 Markaz Islamabad</td>
                    </tr>
                    <tr>
                        <td>F-7 JINNAH SUPER EXPRESS CENTER</td>
                        <td>Islamabad</td>
                        <td>3169992881</td>
                        <td>Flat 6-A Block 12-C Jinnah Super Market F-7 Markaz Islamabad</td>
                    </tr>
                    <tr>
                        <td>F-8 MARKAZ EXPRESS CENTER</td>
                        <td>Islamabad</td>
                        <td>3169992881</td>
                        <td>Shop 8-A Royal Inn Plaza F-8 Markaz Islamabad</td>
                    </tr>
                    <tr>
                        <td>F11 MARKAZ EXPRESS CENTER</td>
                        <td>Islamabad</td>
                        <td>3169992881</td>
                        <td>F-11 Express Center Shop 8 Plot 19 Adjecent to Allied Bank</td>
                    </tr>
                    <tr>
                        <td>G-10 Markaz Express Center</td>
                        <td>Islamabad</td>
                        <td>3169992691</td>
                        <td>Shop No. 45 Ground Floor Sharjah Centre G-10 Markaz Islamabad</td>
                    </tr>
                    <tr>
                        <td>G-11 Markaz Express Center</td>
                        <td>Islamabad</td>
                        <td>3169992691</td>
                        <td>Shop No. 2 Lower Basement Islamabad Arcade G-11 Markaz Islamabad</td>
                    </tr>
                    <tr>
                        <td>Tarame Chowk Express Center</td>
                        <td>Islamabad</td>
                        <td>3169992691</td>
                        <td>Tarame Chowk Lethrar Road near National Bank &amp; Sind Bank Islamabad</td>
                    </tr>
                    <tr>
                        <td>Umer Plaza Blue Area Express Center</td>
                        <td>Islamabad</td>
                        <td>3169992691</td>
                        <td>Office No. 8 Mezzanine Floor Umer Plaza Near Freshco Sweets Blue Area Islamabad</td>
                    </tr>
                    <tr>
                        <td>G-15 Markaz Express Center</td>
                        <td>Islamabad</td>
                        <td>3169992881</td>
                        <td>Shop No. 2 Ittehad Center Near Meezan Bank G-15 Markaz Islamabad</td>
                    </tr>
                    <tr>
                        <td>E-11 Markaz Express Center</td>
                        <td>Islamabad</td>
                        <td>3169992881</td>
                        <td>Shop No. 8 Lower Ground Floor Madina Arcade E-11/3 Islamabad</td>
                    </tr>
                    <tr>
                        <td>F-6 Markaz Express Center</td>
                        <td>Islamabad</td>
                        <td>3169992881</td>
                        <td>Qamar Ul Islam Complex F-6 Markaz Islamabad</td>
                    </tr>
                    <tr>
                        <td>I-10 Markaz Express Center</td>
                        <td>Islamabad</td>
                        <td>3169992881</td>
                        <td>Basement No. 3 Rehmat Plaza Sohni Road I-10 Markaz Islamabad</td>
                    </tr>
                    <tr>
                        <td>I-8 Markaz Express Center</td>
                        <td>Islamabad</td>
                        <td>3169992881</td>
                        <td>Shop No. 15 Plot No. 24 Executive Center I-8 Markaz Islamabad</td>
                    </tr>
                    <tr>
                        <td>G-13 Express Center</td>
                        <td>Islamabad</td>
                        <td>3169992881</td>
                        <td>Shop No. 2 Taha Arcade G-13/1 Near Askari Bank Islamabad</td>
                    </tr>
                    <tr>
                        <td>Awaran</td>
                        <td>Awaran</td>
                        <td>3169993027</td>
                        <td>Village Labach, tehsil Awaran, Balochistan</td>
                    </tr>
                    <tr>
                        <td>Tando Allahyar Express Center</td>
                        <td>Tando Allahyar</td>
                        <td>3169993026</td>
                        <td>Shop No. 2 Main Bus Stop Near National Bank Tando Allahyar</td>
                    </tr>
                    <tr>
                        <td>DERA GHAZI KHAN EXPRESS CENTER</td>
                        <td>Dera Ghazi Khan</td>
                        <td>3169992704</td>
                        <td>Block - E Railway Road Opposite Civil Lines Police Station Dera Ghazi Khan</td>
                    </tr>
                    <tr>
                        <td>Jampur Road Express Center</td>
                        <td>Dera Ghazi Khan</td>
                        <td>3169992704</td>
                        <td>Shop No. 3 Plot No. 14 Opposite Khosa House Jampur Road Dera Ghazi Khan</td>
                    </tr>
                    <tr>
                        <td>Art Council Express Center</td>
                        <td>Dera Ghazi Khan</td>
                        <td>3169992704</td>
                        <td>New Model Town Opposite Art Council Dera Ghazi Khan</td>
                    </tr>
                    <tr>
                        <td>Quetta Road Express Center</td>
                        <td>Dera Murad Jamali</td>
                        <td>3169992869</td>
                        <td>Quetta Road Dera Murad Jamali</td>
                    </tr>
                    <tr>
                        <td>Kohat Express Center</td>
                        <td>kohat</td>
                        <td>3169992890</td>
                        <td>Kohat Express Center Samand Plaza Behzadi Chakkar Kot</td>
                    </tr>
                    <tr>
                        <td>KDA Road Kohat</td>
                        <td>Kohat</td>
                        <td>3169992890</td>
                        <td>Gate No 02, Main Peshawar KDA Kohat</td>
                    </tr>
                    <tr>
                        <td>FAREED GATE EXPRESS CENTRE</td>
                        <td>Bahawalpur</td>
                        <td>3169992892</td>
                        <td>Fareed Gate Bahawalpur</td>
                    </tr>
                    <tr>
                        <td>MODEL TOWN EXPRESS CENTER</td>
                        <td>Bahawalpur</td>
                        <td>3169992892</td>
                        <td>4-C Model Town A Rashid Minhas Road Bahawalpur</td>
                    </tr>
                    <tr>
                        <td>Satellite Town</td>
                        <td>Bahawalpur</td>
                        <td>3169992892</td>
                        <td>Al-Rai Computer Center 8/C Commercial Area Near Panda Ice Bar Al-Maida Fried Chicken Satellite Town Bahawalpur</td>
                    </tr>
                    <tr>
                        <td>Iskandarabad</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>Iskandarabad Market Near Utility Store Mianwali</td>
                    </tr>
                    <tr>
                        <td>Kamar Mushani</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>Shadi Khel Plaza Bannu Road Kamar Mushani Mianwali</td>
                    </tr>
                    <tr>
                        <td>Lakki Marwat</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>Qasim News Agency Main Lari Adda Mianwali</td>
                    </tr>
                    <tr>
                        <td>Piplan</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>Near Telenor Franchise Gallah Mandi Piplan Mianwali</td>
                    </tr>
                    <tr>
                        <td>Wan Bhachran</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>Khalid Market Near GPO Wan Bhachran Mianwali</td>
                    </tr>
                    <tr>
                        <td>Paikhel</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>New Bazar Opposite Thana City Near MCB Bank Paikhel Mianwali</td>
                    </tr>
                    <tr>
                        <td>Kalabagh</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>Near Railway Bridge Ahmed Plaza Basement Shop No. 1 Kalabagh Mianwali</td>
                    </tr>
                    <tr>
                        <td>Chashma</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>Chahsma More Opposite Chashma Colony Chashma Mianwali</td>
                    </tr>
                    <tr>
                        <td>Hafizwala</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>Adda Hafizwala Tehsil Piplan District Mianwali</td>
                    </tr>
                    <tr>
                        <td>Trag</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>Naya Sawera Near HBL Bank Trag Mianwali</td>
                    </tr>
                    <tr>
                        <td>Mianwali Express Center</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>Saeed Akhter Khan Plaza Mianwali</td>
                    </tr>
                    <tr>
                        <td>Talagang Road Express Center</td>
                        <td>Mianwali</td>
                        <td>3169992870</td>
                        <td>Talagand Road Near Central Jail Mianwali</td>
                    </tr>
                    <tr>
                        <td>Badin Express Center</td>
                        <td>Badin</td>
                        <td>3169993026</td>
                        <td>Shop No. 04-05 Nasim City Center Opposite United Hotel Badin</td>
                    </tr>
                    <tr>
                        <td>Khalabat</td>
                        <td>Haripur</td>
                        <td>3169992691</td>
                        <td>Plot No. 151 Sector No. 1 Chowk Sydaan Khalabat Township Haripur</td>
                    </tr>
                    <tr>
                        <td>HARIPUR</td>
                        <td>Haripur</td>
                        <td>3169992691</td>
                        <td>Italian Plaza Yahya Hospital Main GT Road Haripur</td>
                    </tr>
                    <tr>
                        <td>Haripur Express Center</td>
                        <td>Haripur</td>
                        <td>3169992691</td>
                        <td>Akbar Ayub Plaza Near UBL Main GT Road Haripur</td>
                    </tr>
                    <tr>
                        <td>Dinga</td>
                        <td>Kharian</td>
                        <td>3169992866</td>
                        <td>Fawara Chowk Dinga Disgrict Kharian</td>
                    </tr>
                    <tr>
                        <td>Kharian Cantt.</td>
                        <td>Kharian</td>
                        <td>3169992866</td>
                        <td>Beside CMH Cantt. Kharian</td>
                    </tr>
                    <tr>
                        <td>Kharian Express Center</td>
                        <td>Kharian</td>
                        <td>3169992866</td>
                        <td>Near Telenor Office GT Road Kharian</td>
                    </tr>
                    <tr>
                        <td>GT Road Kharian</td>
                        <td>Kharian</td>
                        <td>3169992866</td>
                        <td>Near Telenor Franchise Main GT Road Opposite Lahore Bus Stand Kharian</td>
                    </tr>
                    <tr>
                        <td>RAJANPUR EXPRESS CENTER</td>
                        <td>Rajanpur</td>
                        <td>3169992704</td>
                        <td>Opposite HMC Distribition Zia Shaheed Road Rajanpur</td>
                    </tr>
                    <tr>
                        <td>Rao Khadim Market</td>
                        <td>Rajanpur</td>
                        <td>3169992704</td>
                        <td>Darbar Road Near Ufone franchise Kot Mithan RJP</td>
                    </tr>
                    <tr>
                        <td>Mazari Market Rajanpur</td>
                        <td>Rajanpur</td>
                        <td>3169992704</td>
                        <td>Rao Communication Mazari Market Rajanpur</td>
                    </tr>
                    <tr>
                        <td>Rajana</td>
                        <td>Toba Tek Singh</td>
                        <td>3169992870</td>
                        <td>Makkah Mobile Main Toba Road Rajana Toba Tek Singh</td>
                    </tr>
                    <tr>
                        <td>Toba Tek Singh Express Centre</td>
                        <td>Toba Tek Singh</td>
                        <td>3169992870</td>
                        <td>Shop No. 7 Alfarooq Road Toba Tek Singh</td>
                    </tr>
                    <tr>
                        <td>Canal Road Express Center</td>
                        <td>Toba Tek Singh</td>
                        <td>3169992870</td>
                        <td>Canal Road Toba Tek Singh</td>
                    </tr>
                    <tr>
                        <td>GTS Chowk Express Center</td>
                        <td>Jhelum</td>
                        <td>3169992866</td>
                        <td>Near Raza Bakers GTS Chowk Jhelum</td>
                    </tr>
                    <tr>
                        <td>G.T.ROAD EXPRESS CENTRE</td>
                        <td>Jhelum</td>
                        <td>3169992866</td>
                        <td>Jadda More Near Al Noor Masjid Jhelum</td>
                    </tr>
                    <tr>
                        <td>Harbanspura Express Center</td>
                        <td>Lahore</td>
                        <td>3169992898</td>
                        <td>Main Canal Road Taj Bagh Pull Harbanspura Lahore</td>
                    </tr>
                    <tr>
                        <td>Garhi Shahu Express Center</td>
                        <td>Lahore</td>
                        <td>3169992898</td>
                        <td>65- Main Allama Iqbal Road Garhi Shahu Lahore</td>
                    </tr>
                    <tr>
                        <td>Baghbanpura Express Center</td>
                        <td>Lahore</td>
                        <td>3169992898</td>
                        <td>143 GT Road Near Post Office Singhpura Baghbanpura Lahore</td>
                    </tr>
                    <tr>
                        <td>Zarar Shaheed Road Express Center</td>
                        <td>Lahore</td>
                        <td>3169992898</td>
                        <td>3G Store Zarar Shaheed Road Near Jorry Pull Al-Faisal Town Lahore</td>
                    </tr>
                    <tr>
                        <td>Infantry Road Express Center</td>
                        <td>Lahore</td>
                        <td>3169992898</td>
                        <td>Shop No. 1 Fahad Plaza 3 Infantry Road Lahore</td>
                    </tr>
                    <tr>
                        <td>Infantry Road Express Center</td>
                        <td>Lahore</td>
                        <td>3169992898</td>
                        <td>325- GT Road Opposite Green CNG Station College Stop Daroghawala Lahore</td>
                    </tr>
                    <tr>
                        <td>Lalpul Mughalpura Express Center</td>
                        <td>Lahore</td>
                        <td>3169992898</td>
                        <td>Lal Pull Mughal Pura Near Gourmet Bakers Canal Road Lahore</td>
                    </tr>
                    <tr>
                        <td>Barki Road Express Center</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>Barki Road Lahore</td>
                    </tr>
                    <tr>
                        <td>Saddar Express Center</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>Saddar Bazar Lahore</td>
                    </tr>
                    <tr>
                        <td>Batapur Express Center</td>
                        <td>Lahore</td>
                        <td>3169992898</td>
                        <td>Bata Pur Near Manawan Police Station Lahore</td>
                    </tr>
                    <tr>
                        <td>Cantt Board Plaza Express Center</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>Suite No. 3 Cantt Board Plaza Adjacent To The Mall Of Lahore Tufail Road, Afshan Chowk Lahore</td>
                    </tr>
                    <tr>
                        <td>Ghazi Road Devine Center Express Center</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>GF-13 Devine Center Airport Road Lahore</td>
                    </tr>
                    <tr>
                        <td>Walton Road Express Center</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>Shop 4 Tufail Market Mian Walton Road Lahore</td>
                    </tr>
                    <tr>
                        <td>Nishat Colony Express Center</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>Faisal Ghuman Road Opposite Garrison Cadet College Nishat Colony Lahore</td>
                    </tr>
                    <tr>
                        <td>Ghazi Road Shaukat Town Express Center</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>Shop 56 Mian Ghazi Road Near Shaukat Town Lahore</td>
                    </tr>
                    <tr>
                        <td>Bedian Road Express Center</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>Jammo Stop Main Bedian Road Lahore</td>
                    </tr>
                    <tr>
                        <td>H-Block DHA Express Center</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>Commercial Market Near Shezan Restaurant H - Block DHA Lahore</td>
                    </tr>
                    <tr>
                        <td>Empress Road Express Center</td>
                        <td>Lahore</td>
                        <td>3169992898</td>
                        <td>29 Empress road lahore opp radio pakistan</td>
                    </tr>
                    <tr>
                        <td>T-Block DHA Express Center</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>57-CCA Phase II Near Dogar Restaurant Opposite T Block Mosque DHA</td>
                    </tr>
                    <tr>
                        <td>Ellahabad</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>Rashid Computer and Photostate, Tufail Plaza, Ellahbad</td>
                    </tr>
                    <tr>
                        <td>GARDEN TOWN EXPRESS CENTER</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>Shop No. 43-44 Center Plaza Barket Market New Garden Town Lahore</td>
                    </tr>
                    <tr>
                        <td>ICHRAH-FEROZPUR EXPRESS CENTER</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>Shop No. 45-A Main Ferozpur Road Ichhra Lahore</td>
                    </tr>
                    <tr>
                        <td>MODEL TOWN LINK ROAD EXPRESS CENTER</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>Moulana Shaukat Ali Road Mochi Pura Stop Township Lahore</td>
                    </tr>
                    <tr>
                        <td>MODEL TOWN CENTRE PARK EXPRESS CENTER</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>Plot No.1 Block B Model Town Near Model Town Central Park Roundabout Lahore</td>
                    </tr>
                    <tr>
                        <td>THOKKAR NAIZ BAIG EXPRESS CENTER</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Ali Town Stop Near HBL Raiwind Road Thokar Niaz Baig Lahore</td>
                    </tr>
                    <tr>
                        <td>TNB AREA OFFICE EXPRESS CENTER</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>TNB Express Center Opposite EME Society</td>
                    </tr>
                    <tr>
                        <td>H-Block Johar Town Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Office No. 1 Zam Zam Mall H3 Block Johar Town Lahore</td>
                    </tr>
                    <tr>
                        <td>H-Block Model Town Express Center</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>19 Murtaza Building Near Ittefaq Hospital H-Block Model Town Lahore</td>
                    </tr>
                    <tr>
                        <td>Hamdard Chowk Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Plot No. 397 Sector A-1 Near Nursery Stop Township Lahore</td>
                    </tr>
                    <tr>
                        <td>Samanabad Poonch Road Express Center</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>Poonch Road Samanabad Near National Bank of Pakistan Lahore</td>
                    </tr>
                    <tr>
                        <td>Firdous Market Express Center</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>Firdous Market Near Gourmet Bakers Lahore</td>
                    </tr>
                    <tr>
                        <td>Wapda Town Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Shop No. 3 194 Iqbal Avenue Housing Society Near Alfateh Departmental Store Wapda Town Lahore</td>
                    </tr>
                    <tr>
                        <td>College Road Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Plot 36 Block 2 Sector C2 Butt Chowk College Road Township Lahore</td>
                    </tr>
                    <tr>
                        <td>Model Town M-Block Express Center</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>M Block Model Town Extension Lahore</td>
                    </tr>
                    <tr>
                        <td>Valancia Town Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>25-A1 Commercial Area Near Gate No. 2 Valancia Town Lahore</td>
                    </tr>
                    <tr>
                        <td>Allah Ho Chowk Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>411 - E Shop No. 11 Ali Hajvery Market Main Boulevard Allah Ho Chowk Near Latif Hospital &amp; BFC Johar Town, Lahore</td>
                    </tr>
                    <tr>
                        <td>Bagrian Chowk Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Plot No. 414 Block 6 Sector C2 Near Bagrian Chowk Green Town Lahore</td>
                    </tr>
                    <tr>
                        <td>Dr. Hospital Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Plot No. 10 Block G Opposite G1 Market Johar Town Lahore</td>
                    </tr>
                    <tr>
                        <td>PIA Road Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>341-D PIA Road Chaudhay Chowk Johar Town Lahore</td>
                    </tr>
                    <tr>
                        <td>Dubai Town Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Dubai Town Raiwind Road Lahore</td>
                    </tr>
                    <tr>
                        <td>Bahria Town Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Plaza No. 158-A Commercial Area Sector-C Talwaar Chowk Near Gourmet Bakers Bahria Town Lahore</td>
                    </tr>
                    <tr>
                        <td>Shadewal Chowk Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Office No-3 Ground Floor Pak Way Plaza Plot 26 Block-N Johar Town Lahore</td>
                    </tr>
                    <tr>
                        <td>EME Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Shop 8-C Commercial Market Canal City Near EME Gate No. 6 Canal Road Lahore</td>
                    </tr>
                    <tr>
                        <td>Naseerabad Express Center</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>Main Ferozpur Road Naseerabad Lahore</td>
                    </tr>
                    <tr>
                        <td>Gurumangat Express Center</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>Workshop Chowk Gurumangat Road Opposite Akram Tikka Shop Gulberg-III Lahore</td>
                    </tr>
                    <tr>
                        <td>Shahkam Chowk Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Shahkam Chowk canal bank road Near Meezan Bank Outside Bahria Town Lahore</td>
                    </tr>
                    <tr>
                        <td>Jati Umrah Express Center</td>
                        <td>Lahore</td>
                        <td>3169992895</td>
                        <td>Adda Plot Raiwind Road Near PSO Pump Lahore</td>
                    </tr>
                    <tr>
                        <td>Moon Market Faisal Town Express Center</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>748 C Near Ravi Restaurant Faisal Town Lahore</td>
                    </tr>
                    <tr>
                        <td>Peco Road Kot Lakhpat Express Center</td>
                        <td>Lahore</td>
                        <td>3169993191</td>
                        <td>Khursheed Plaza Peco Road Kot Lakhpat Lahore</td>
                    </tr>
                    <tr>
                        <td>Marghazar Colony Express Center</td>
                        <td>lahore</td>
                        <td>N/A</td>
                        <td>84-B, Meraj Park, Hassan Town, Multan Road, Lahore</td>
                    </tr>
                    <tr>
                        <td>SHALIMAR LINK ROAD EXPRESS CENTER</td>
                        <td>Lahore</td>
                        <td>3169992898</td>
                        <td>Opposite Shalimar Hospital Near Khan General Store Shalimar Link Road Lahore</td>
                    </tr>
                    <tr>
                        <td>DEFENCE CANTT EXPRESS CENTER</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>Shop-1 Shalimar Market Mian Boulevard DHA Lahore</td>
                    </tr>
                    <tr>
                        <td>DEFENCE EXPRESS CENTER (Y-BLOCK)</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>Shop U/G 24 Commercial Plaza Gol Market Y Block DHA Lahore</td>
                    </tr>
                    <tr>
                        <td>CARGO AREA EXPRESS CENTER</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>
                            TCS Office Cargo Area Airport Lahore
                        </td>
                    </tr>
                    <tr>
                        <td>FEROZ PUR ROAD EXPRESS CENTER</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>Plot No.1 Shahzad Park 19-Km Main Ferozepur Road Near Nishter Colony Metro Bus Station Lahore</td>
                    </tr>
                    <tr>
                        <td>CAVELLARY GROUND CANTT EXPRESS CENTER</td>
                        <td>Lahore</td>
                        <td>3169992972</td>
                        <td>65- Commercial Zone Adjacent To Agfa Point Cavalry Ground Lahore</td>
                    </tr>
                    <tr>
                        <td>Super Highway</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. 12 Asif Market Zikariya Goth Super Highway Karachi</td>
                    </tr>
                    <tr>
                        <td>AMBER TOWER EXP. CENTRE</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop 22-A Amber Tower PECHS Block - 6 Main Shaharah-e-Faisal Karachi</td>
                    </tr>
                    <tr>
                        <td>BANGALORE TOWN E.C</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Banglore Town PECHS Opposite Awami Markez Karachi</td>
                    </tr>
                    <tr>
                        <td>SHAMSHEER EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Main Khadda Market Karachi</td>
                    </tr>
                    <tr>
                        <td>FALAKNAZ EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. G.2 Ground Floor Flaknaz Plaza Shahrah-e-Faisal Karachi</td>
                    </tr>
                    <tr>
                        <td>DEFENCE PHASE1 EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 81 - C Main Korangi Road Phase - 2 Extension DHA Karachi</td>
                    </tr>
                    <tr>
                        <td>HEAD OFFICE EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>101-104 CAA Club Road Near Hajj Terminal - 3 Karachi</td>
                    </tr>
                    <tr>
                        <td>BAHADURABAD EXP. CENTRE</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 7 Plot 24 KCHS Area Karachi</td>
                    </tr>
                    <tr>
                        <td>NURSERY EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Humaira Centre Near Blue Ribbon Bakery Karachi</td>
                    </tr>
                    <tr>
                        <td>THE MALL EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>37 - E Block - 6 PECHS Shahrah-E-Faisal Karachi</td>
                    </tr>
                    <tr>
                        <td>TAUHEED COMMERCIAL EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 4 Plot 16 - C 26Th Street Tauheed Commercial Phase 5 Karachi</td>
                    </tr>
                    <tr>
                        <td>MALIR CANTT EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. 180 S-13 Cantt Bazar Malir Cantonement Karachi</td>
                    </tr>
                    <tr>
                        <td>ITIHAD FLAGSHIP EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>15-C Lane 10 Phase 6 Khayaban-e-Ittehad Road Karachi</td>
                    </tr>
                    <tr>
                        <td>TARIQ ROAD EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Plot No. 172 / J2 Mateen Shoping Gallery Tariq Road Karachi</td>
                    </tr>
                    <tr>
                        <td>CLIFTION EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 5 - 6 Saqib Arcade Block - 7 Clifton Karachi</td>
                    </tr>
                    <tr>
                        <td>MEHRAN TOWN EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>EBM Crossway, Korangi Industrial Area, Karachi</td>
                    </tr>
                    <tr>
                        <td>Korangi Crossing Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. 15 Scheme No. 7 Shah Abdul Latif Bhittai Masjid Bhittai Colony Korangi Crossing Karachi</td>
                    </tr>
                    <tr>
                        <td>Korangi Industrial Area/Vita Chowrangi Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No 1 Plot LS - 1 Sector - 17 Main Vita Chowrangi Korangi Industrial Area Karachi</td>
                    </tr>
                    <tr>
                        <td>Korangi Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. 7 Jamia Masjid Raza Korangi No. 4 Karachi</td>
                    </tr>
                    <tr>
                        <td>Brooks Chowrangi Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Plot No. LS - 2 Street 3/1 Sector - 15 Korangi Karachi</td>
                    </tr>
                    <tr>
                        <td>Malir Court Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>G - 14 Al - Raza Mobile City Square New Malir City Near Malir Court Karachi</td>
                    </tr>
                    <tr>
                        <td>Quaidabad/Dawood Chowrangi Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. C - 4 - A Raja Khel Market Main Dawood Chowrangi Landhi Karachi</td>
                    </tr>
                    <tr>
                        <td>Gulshan-e-Hadeed Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. 3 Haq Baho Shopping Center Gulshan-e-Hadeed Phase - I Karachi</td>
                    </tr>
                    <tr>
                        <td>SMCHS Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 17 Muhammad Bin Qasim Masjid Block - A SMCHS Karachi</td>
                    </tr>
                    <tr>
                        <td>Boat Basin Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Plot No. 10 - C Lane No. 4 Sehar Commercial Phase - VII DHA Karachi</td>
                    </tr>
                    <tr>
                        <td>M. Ali Society Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. 26 Anam Pride Plot No. A/22 KCHS Block 7/8 Shaheed-e-Millat Road, Off. Shahrah-e-Faisal Karachi</td>
                    </tr>
                    <tr>
                        <td>Jail Chowrangi Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 1 Zaheerun-Nisa Arcade Main Jail Chowrangi Central Jail Karachi</td>
                    </tr>
                    <tr>
                        <td>Columbus Tower/Teen Talwar Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. G-4 Columbus Tower Near PSO Petrol Pump Teen Talwar Khayaban-e-Iqbal Main Clifton Road Karachi</td>
                    </tr>
                    <tr>
                        <td>Khyaban-e-Shahbaz Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Plot No. 19 -C Shop No - 3 Lane - 2 Khayaban-e-Shahbaz Commercial DHA Phase - 6 Karachi</td>
                    </tr>
                    <tr>
                        <td>Phase - I Defence Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 506 Defence Garden Apartments Block - 38 Phase - I DHA Opposite NMC Karachi</td>
                    </tr>
                    <tr>
                        <td>Model Colony Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. 1 Liaquat Ali Khan Road Opposite Student Biryani Model Colony Karachi</td>
                    </tr>
                    <tr>
                        <td>Khudadad Chowrangi Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 16 Society Apartment Block - 2 PECHS, Main Shahrah-e-Quaideen Adjecent To ABL Karachi</td>
                    </tr>
                    <tr>
                        <td>Mehmoodabad Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 4 Plot No. PB 2 Block No. 7 KAECHS Adjecent To Sitara Bakery Karachi</td>
                    </tr>
                    <tr>
                        <td>Sabzi Mandi Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 7 Business Arcade Opposite Askari Park Main University Road Old Sabzimandi Karachi</td>
                    </tr>
                    <tr>
                        <td>Punjab Chowrangi Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 5 Ground Floor National Square Block - 8 Clifton Near PSO Petrol Pump Karachi</td>
                    </tr>
                    <tr>
                        <td>Kaala Board Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. 6 Plot No. 32/216 Near Nehal Hospital Kaala Board Darakhshan Society Malir Karachi</td>
                    </tr>
                    <tr>
                        <td>Dhorajee Society Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. 6 Arfat Arcade Near Masjid Kibria Zubaida Hospital Dhoraji Society Karachi</td>
                    </tr>
                    <tr>
                        <td>Defence Phase-4 Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Plot # 58, 10th Comm, Street DHA Phase IV (Behind MCB Bank) Next Masjid Ebrahim, Karachi.</td>
                    </tr>
                    <tr>
                        <td>Babar Market Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>Shop No. 07 KDA Quarter Area 4-A Landhi-04 Karachi</td>
                    </tr>
                    <tr>
                        <td>Zamzama Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 1 Plot 22-C/1 Lane - 3 Zamzama Commercial Phase V DHA Karachi</td>
                    </tr>
                    <tr>
                        <td>Gulshan-E-Hadeed Phase II Express Center</td>
                        <td>Karachi</td>
                        <td>3169993027</td>
                        <td>B-69 Phase-II Gulshan-e-Hadeed Karachi</td>
                    </tr>
                    <tr>
                        <td>Bilawal House Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. G - 19 Corniche Residency Opposite Bilawal House Block - 2 Clifton Karachi</td>
                    </tr>
                    <tr>
                        <td>Khalid Bin Waleed Road Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>E-89 Block 2 PECHS Khalid Bin Waleed Road Karachi</td>
                    </tr>
                    <tr>
                        <td>Chota Bukhari Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Plot No. 19-C Street-2 Commercial Lane Shop No.1 Chhota Bukhari DHA Phase 6 Karachi</td>
                    </tr>
                    <tr>
                        <td>Export Processing Zone Express Center</td>
                        <td>karachi</td>
                        <td>3169993027</td>
                        <td>Karachi Export Processing Zone (Near at Hospital Chowrangi)</td>
                    </tr>
                    <tr>
                        <td>Badar Commercial Express Center</td>
                        <td>Karachi</td>
                        <td>3169992885</td>
                        <td>Shop No. 2 Plot No. 38 - C Street 10 Badar Commercial Phase V DHA Karachi</td>
                    </tr>
                    <tr>
                        <td>Bahria Town SIS</td>
                        <td>karachi</td>
                        <td>3169993027</td>
                        <td>Bahria Town, Midway Commercial Karachi, Near BTK Head Office, Usmania Society, R116 Main Sfora Chowrangi, Scheme 33, Karachi</td>
                    </tr>
                    <tr>
                        <td>GULSHAN-E-IQBAL 13D Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 32 Haider Plaza Block - 5 Gulshan-e-Iqbal Karachi</td>
                    </tr>
                    <tr>
                        <td>GULISTAN-E-JOHAR EXPRESS CENTRE</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 19 Saima Classic Main Johar More Rashid Minhas Road Karachi</td>
                    </tr>
                    <tr>
                        <td>HYDRI EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No. B-13 Al Bohran Circle Block-B North Nazimabad Karachi</td>
                    </tr>
                    <tr>
                        <td>GULSHAN-E-IQBAL EXPRESS CENTRE</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 6 Shelozon Center Block-15 Gulshan-e-Iqbal Karachi</td>
                    </tr>
                    <tr>
                        <td>MEENA BAZAR EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Nadeem Shoping Center Meena Bazar Karachi</td>
                    </tr>
                    <tr>
                        <td>ORANGI TOWN (OLE) EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Banaras Town Sector 8 Orangi Town Opposite Banaras Town Masjid Karachi</td>
                    </tr>
                    <tr>
                        <td>S.I.T.E EXPRESS CENTRE</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No. 5 Site Shopping Centre Manghopir Road Opposite MCB Site Branch Karachi</td>
                    </tr>
                    <tr>
                        <td>TRUCK STAND EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Gate No 6 Quaid-e-Azam Truck Stand Hawks Bay Road Karachi</td>
                    </tr>
                    <tr>
                        <td>ART COUNCIL EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. G-1/A Ground Floor Court View Appartment Karachi</td>
                    </tr>
                    <tr>
                        <td>KARACHI WEST AREA EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>
                            TCS Area Office - West Elendar Road Off I.I.Chundrigar Road Near Shaheen Complex Karachi
                        </td>
                    </tr>
                    <tr>
                        <td>BADRI EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. 27 Badri Bulding Near C.P.O I.I.Chundrigar Road Karachi</td>
                    </tr>
                    <tr>
                        <td>METROPOLE EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. 3 Lotia Building No. 2 Club Road Karachi</td>
                    </tr>
                    <tr>
                        <td>CANTT CARGO EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No. 1 &amp; 2 Plot No. 33 Street No. Cl-8 Near Bombay Hotel Cantt Station Karachi</td>
                    </tr>
                    <tr>
                        <td>MEMON MASJID EXPRESS CENTRE</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. 11 New Memon Masjid M.A.Jinnah Road Karachi</td>
                    </tr>
                    <tr>
                        <td>GARDEN WEST (EXPRESS CENTER)</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No. 5 Saify Building Opposite KMC Zoo Nishter Road Karachi</td>
                    </tr>
                    <tr>
                        <td>GURUMANDIR EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No.1 Parakh Apartment Plot No. 924 Claton Road 5 Opposite Sabil Wali Masjid Karachi</td>
                    </tr>
                    <tr>
                        <td>JODIA BAZAR EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. 16-A Noorani Center 543 Admjee Dawood Road Jodia Baza Karachi</td>
                    </tr>
                    <tr>
                        <td>SADDAR EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. 9 Opposite GPO Cooperative Market Karachi</td>
                    </tr>
                    <tr>
                        <td>NEW LIGHT HOUSE EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. 1 Opel Building Light House M.A.Jinnah Road Near Jinnah Sports Karachi</td>
                    </tr>
                    <tr>
                        <td>GUL PLAZA EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No.10 Gul Plaza M.A.Jinnah Road Karachi</td>
                    </tr>
                    <tr>
                        <td>I.I.CHUNDRIGAR EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. 49 / 59 Uni Plaza I.I.Chundrigar Road Right Opposite City Station Karachi</td>
                    </tr>
                    <tr>
                        <td>WEST WHARF EXP.CENTRE</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. 24 Ware House Area West Wharf Road Karachi</td>
                    </tr>
                    <tr>
                        <td>CITY COURT EXPRESS CENTER</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>City Court Karachi</td>
                    </tr>
                    <tr>
                        <td>Five Star Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Street - 2 Shop - 7 Florence Garden Near 5 Star Chowrangi Block - H North Nazimabad Karachi</td>
                    </tr>
                    <tr>
                        <td>Liaqutabad Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Plot No. 25 Row 1 C1 Area Liaquatabad Karachi</td>
                    </tr>
                    <tr>
                        <td>Johar Chowrangi Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. W5 Eastern Pride Block 15 Gulistan-e-Johar Karachi</td>
                    </tr>
                    <tr>
                        <td>Gulshan-E-Maymar Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 02 A - 36 Sector - Z2 �Near Welcome Store Gate No. 2 Gulshan-E-Maymar Karachi</td>
                    </tr>
                    <tr>
                        <td>Board Office Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No. A - 3 Shah Faisal Plaza Block - B North Nazimabad Karachi</td>
                    </tr>
                    <tr>
                        <td>Ancholi Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>C-28 Yousuf Plaza Block - 16 F.B Area Karachi</td>
                    </tr>
                    <tr>
                        <td>Gol Market Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Plot No. 12/13 Chishti Height Shop No. 2 Block 3-F Nazimabad No. 3 Karachi</td>
                    </tr>
                    <tr>
                        <td>Mashriq Center Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 5 Noman Arcade Block - 14 Gulshan-e-Iqbal Karachi</td>
                    </tr>
                    <tr>
                        <td>Buffer Zone Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No. 09 Scheme - 24 Rays Centre Block - N North Nazimabad Karachi</td>
                    </tr>
                    <tr>
                        <td>Abul Hasan Isphani Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 19 Haroon Center Main Abul Hasan Isphani Road Gulshan-e-Iqbal Karachi</td>
                    </tr>
                    <tr>
                        <td>Baldia Town Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No. 4 Plot No. 130 Sector 5-J Main 24 Ki Market Saeedabad Baldia Town Karachi</td>
                    </tr>
                    <tr>
                        <td>F.B. Area Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. A/3/2 Nighat Square Block - 7 F.B Area Karachi</td>
                    </tr>
                    <tr>
                        <td>Godhra Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Plot - 8 Block No. 1 Sector 11 - F New Karachi Industrial Area Godhra Near Nala Stop Karachi</td>
                    </tr>
                    <tr>
                        <td>Mosmiat Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 8 Dashtiyar Apartment Main University Road Mosmiat Karachi</td>
                    </tr>
                    <tr>
                        <td>Gulshan-E-Iqbal 13-D Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>L-151 Block 13-D Gulshan-e-Iqbal Karachi</td>
                    </tr>
                    <tr>
                        <td>Shershah Chowk Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>E - 671 M - II Habib Building Block - D Main Road Shershah Karachi</td>
                    </tr>
                    <tr>
                        <td>U.P More Exress Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. D - 81 Iqbal Plaza Plot No. Fl-30 Sector 11 - C - 1 Near Nagan Fly Over Bridge North Karachi</td>
                    </tr>
                    <tr>
                        <td>Bilal Town/Power House Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. B - 12 Sherton Pride Sector 5 - I Bilal Town North Karachi</td>
                    </tr>
                    <tr>
                        <td>Nazimabad Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 3 Sir Syed Urdu Bazar Nazimabad No. 1 Karachi</td>
                    </tr>
                    <tr>
                        <td>Karachi University Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 4 Bell Arcade University Road Karachi</td>
                    </tr>
                    <tr>
                        <td>Metrovile Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Metro Shopping Mall Main Metroville Road Site Karachi</td>
                    </tr>
                    <tr>
                        <td>Haroon Naval Colony Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Crescent Public School Building Haroon Bahria Naval Colony Karachi</td>
                    </tr>
                    <tr>
                        <td>Paposh Nagar Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 3 Plot No. 13/2 5C Nazimabad No. 5 Karachi</td>
                    </tr>
                    <tr>
                        <td>Saforah Chowrangi Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 21 Arif Arcade Saforah Chowrangi Karachi</td>
                    </tr>
                    <tr>
                        <td>Erum Shopping Emporium Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No. A -34 Erum Shopping Emporium Phase II Street - 8 Sector 15-A/3 Buffer Zone Karachi</td>
                    </tr>
                    <tr>
                        <td>Orangi Town No. 5 Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Plot No. LS-22 Sector 12-L Orangi Town Karachi</td>
                    </tr>
                    <tr>
                        <td>Dalmia Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 3 Street No. 3 National Stadium Road Dalmia Karachi</td>
                    </tr>
                    <tr>
                        <td>Banoria Town Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Plot No. C2/A29 Near Binoria Restaurant Site Karachi</td>
                    </tr>
                    <tr>
                        <td>Lyari Express Center</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Plot No. 8 Survey No. LY - 12 Shop No. 7 Sheedy Village Road Lea Market Lyari Town Karachi</td>
                    </tr>
                    <tr>
                        <td>Plaza Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Business Plaza Frere Market Shop No. 8 Plot AM 377 Shahrah-e-Liaquat Behind Akber Road Karachi</td>
                    </tr>
                    <tr>
                        <td>Rainbow Center Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>B-32 New Katrik Market Behind Rainbow Centre Saddar Karachi</td>
                    </tr>
                    <tr>
                        <td>Electronic Market Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No. G-124 Al Najeebi Electronic Bazar Karachi</td>
                    </tr>
                    <tr>
                        <td>Lasbela Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No. 50 Shama Centre Main Lasbela Chowk Karachi</td>
                    </tr>
                    <tr>
                        <td>Custom House Express Center</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. 1 Iqbal Poona Wala Building Opposite Custom House Karachi</td>
                    </tr>
                    <tr>
                        <td>Lucky Star Express Center</td>
                        <td>Karachi</td>
                        <td>3169992876</td>
                        <td>Shop No. 8 Rafique Plaza Main Lucky Star Opposite Shell Petrol Pump Karachi</td>
                    </tr>
                    <tr>
                        <td>Keemari Express Center</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Saba Heights Near Jackson Market Keemari Karachi</td>
                    </tr>
                    <tr>
                        <td>M. A. Jinnah Road/Radio Pakistan Express Center</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>5 Malkani Mansion Main M.A Jinnah Road Karachi</td>
                    </tr>
                    <tr>
                        <td>Paper Market Express Center</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. K-S/258 Allah Bakht Effendi Manzil Shahrah-e-Liaqat Karachi</td>
                    </tr>
                    <tr>
                        <td>Denso Hall Express Center</td>
                        <td>Karachi</td>
                        <td>3169992914</td>
                        <td>Shop No. 1 Trade Tower Altaf Hussain Road Denso Hall Karachi</td>
                    </tr>
                    <tr>
                        <td>Gujjar Nala Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Shop No. 2 Near Baloch Hotel Liaquatabad Karachi</td>
                    </tr>
                    <tr>
                        <td>4K Chowrangi Express Center</td>
                        <td>Karachi</td>
                        <td>3102403500</td>
                        <td>Plot # R 52, Shop # 01, Sector 5/A-2, Under Metro Bus Station, North Karachi.</td>
                    </tr>
                    <tr>
                        <td>Noshki</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Killi Gharibabad Main Bazar Noshki Quetta</td>
                    </tr>
                    <tr>
                        <td>Kohlu</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>FC Road Near FC School Kohlu Quetta</td>
                    </tr>
                    <tr>
                        <td>AREA OFFICE</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Pashin Stop Near Bushra Arcade Model Town Quetta</td>
                    </tr>
                    <tr>
                        <td>HAZARA TOWN EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Main Aliabad Road Hazara Town Quetta</td>
                    </tr>
                    <tr>
                        <td>EXPRESS CENTRE MAIN</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Near Dr. Bano Road Main Jinnah Road Quetta</td>
                    </tr>
                    <tr>
                        <td>ALAMDAR ROAD EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Near Jamia Amam Sadi Alamdar Road Quetta</td>
                    </tr>
                    <tr>
                        <td>PAF BASE EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>PAF Base Samungli Quetta</td>
                    </tr>
                    <tr>
                        <td>SAMUNGLI ROAD EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Near Hot &amp; Chilli Samungli Road Quetta</td>
                    </tr>
                    <tr>
                        <td>SARIAB ROAD EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Sariyab Road Opposite Balochistan University Quetta</td>
                    </tr>
                    <tr>
                        <td>ZARGHOON ROAD EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Near Dr. Zohya Hospital Block-2 Satellite Town Quetta</td>
                    </tr>
                    <tr>
                        <td>BARWARY ROAD EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Wahdat Colony Stop No. 03 Brewery Road Quetta</td>
                    </tr>
                    <tr>
                        <td>CANTT B Express Center</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Chiltan Market Shop No. 18 Staff College Road Quetta</td>
                    </tr>
                    <tr>
                        <td>DALBANDIN EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Masjid Road Near GPO Dalbandin Quetta</td>
                    </tr>
                    <tr>
                        <td>KUCHLAK EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Near MCB Bank Main Chaman Road Kuchlak Quetta</td>
                    </tr>
                    <tr>
                        <td>Khanozai EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Main Bazar Khanozai Quetta</td>
                    </tr>
                    <tr>
                        <td>KILLA SAIFULLAH EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Wasay Market Shop-7 Jang Shan Chowk Quetta Road Near MCB Bank Killa Saifullah Quetta</td>
                    </tr>
                    <tr>
                        <td>LORALAI EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Main Bazar Near Honda Showroom Loralai Quetta</td>
                    </tr>
                    <tr>
                        <td>MUSTUNG EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Baldia Market Masjid Road Near Ufone Franchies Mastung Quetta</td>
                    </tr>
                    <tr>
                        <td>SIBBI EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Shop No. 01 M.A. Jinnah Road Near Governor House Sibi Quetta</td>
                    </tr>
                    <tr>
                        <td>KHUZDAR EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Mir Chakar Khan Road Near Sabri Masjid Khuzdar Quetta</td>
                    </tr>
                    <tr>
                        <td>DUKI EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Main Bazar Dukki Quetta</td>
                    </tr>
                    <tr>
                        <td>CHAMAN EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Shop Np. 5 Al-Saif Business Complex Taj Road Chaman Quetta</td>
                    </tr>
                    <tr>
                        <td>KHARAN EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Near Raskoh Hotel Chief Chowk Main Quetta Road Kharan Quetta</td>
                    </tr>
                    <tr>
                        <td>KALAT EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Arboi Road Near NBP Bank Kalat Quetta</td>
                    </tr>
                    <tr>
                        <td>MUSLIM BAGH EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Main Bazar Muslim Bagh Quetta</td>
                    </tr>
                    <tr>
                        <td>ZHOB EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Near Jamia Masjid Link Sarbat Khan Road Zhob Quetta</td>
                    </tr>
                    <tr>
                        <td>HARNAI EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Main Bazar Harnai Quetta</td>
                    </tr>
                    <tr>
                        <td>MUCH EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Main Bazar Muchh Quetta</td>
                    </tr>
                    <tr>
                        <td>Ziarat EXPRESS CENTER</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Main Bazar NBP Bank Ziayrat Quetta</td>
                    </tr>
                    <tr>
                        <td>Mecongi Road Express Center</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Near Nasir Ul Azha Amam Bargha Mecongi Road Quetta</td>
                    </tr>
                    <tr>
                        <td>Airport Road Express Center</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Near Al Mustafa Coach Sarvice Airport Road Quetta</td>
                    </tr>
                    <tr>
                        <td>Masjid Road Expess Center</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Natha Sing Street Shop No. 05 Masijd Road Quetta</td>
                    </tr>
                    <tr>
                        <td>Toghi Road Express Center</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Near Muslimabad School Toghi Road Quetta</td>
                    </tr>
                    <tr>
                        <td>Nawa Killi Express Center</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>Near Sabzi Mandi Nawa Killi Quetta</td>
                    </tr>
                    <tr>
                        <td>Express Centre Cantt A</td>
                        <td>Quetta</td>
                        <td>3169992891</td>
                        <td>New Jinnah Welfare Shop, Quetta Cantt, Near Meezan Bank Cantt Branch</td>
                    </tr>
                    <tr>
                        <td>CHUNIAN EXPRESS CENTER</td>
                        <td>Pattoki</td>
                        <td>3169993191</td>
                        <td>Main Chunian Road Pattoki</td>
                    </tr>
                    <tr>
                        <td>Darya Khan</td>
                        <td>Bhakkar</td>
                        <td>3169992870</td>
                        <td>Al Karim Center Near Punjab Bank Darya Khan Bhakkar</td>
                    </tr>
                    <tr>
                        <td>Dullewala</td>
                        <td>Bhakkar</td>
                        <td>3169992870</td>
                        <td>Near Bus Stop Dullewala Bhakkar</td>
                    </tr>
                    <tr>
                        <td>Jandanwala</td>
                        <td>Bhakkar</td>
                        <td>3169992870</td>
                        <td>Bukhari Road Jandanwala Bhakkar</td>
                    </tr>
                    <tr>
                        <td>Kaloor Kot</td>
                        <td>Bhakkar</td>
                        <td>3169992870</td>
                        <td>Hamdard Brother Books Center Kaloor Kot Bhakkar</td>
                    </tr>
                    <tr>
                        <td>Kotla Jam</td>
                        <td>Bhakkar</td>
                        <td>3169992870</td>
                        <td>Near Girls High School Opposite Kohawar Town Kotla Jam Bhakkar</td>
                    </tr>
                    <tr>
                        <td>Panj Girain</td>
                        <td>Bhakkar</td>
                        <td>3169992870</td>
                        <td>Near Lari Adda Main Road Panj Girain Bhakkar</td>
                    </tr>
                    <tr>
                        <td>36 Chowk</td>
                        <td>Bhakkar</td>
                        <td>3169992870</td>
                        <td>Aulakh Mobile Opposite UBL Bank 36 Chowk Bhakkar</td>
                    </tr>
                    <tr>
                        <td>Bhakkar Express Center</td>
                        <td>Bhakkar</td>
                        <td>3169992870</td>
                        <td>Furniture Market Bhakkar</td>
                    </tr>
                    <tr>
                        <td>Parachinar</td>
                        <td>Parachinar</td>
                        <td>N/A</td>
                        <td>Shop # 02, School Road, Parachinar, Khurram Agency, Near Katchery Gate, Parachinar</td>
                    </tr>
                    <tr>
                        <td>Padidan</td>
                        <td>Hyderabad</td>
                        <td>3143504162</td>
                        <td>Shop # 2, Resham Gali, Near Medical Store, Padidan</td>
                    </tr>
                    <tr>
                        <td>AGRICULTURE EXPRESS CENTRE</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Shop No. 12 Agricultural Complex Hyderabad</td>
                    </tr>
                    <tr>
                        <td>AL NOOR HEIGHTS EXP CENTER</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Shop No. 02 Al Noor Heights Jamshoro Road Hyderabad</td>
                    </tr>
                    <tr>
                        <td>QASIMABAD EXPRESS CENTER</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Riaz Luxuries Near Caltex Petrol Pump Main Qasimabad Road Hyderabad</td>
                    </tr>
                    <tr>
                        <td>MARKET EXPRESS CENTRE.</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Shop No. 26 Jacob Road Tilak Incline Hyderabad</td>
                    </tr>
                    <tr>
                        <td>LATIFABAD EXPRESS CENTRE</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Shop No. 01 Bismillah Manzil Unit No. 07 Latifabad Hyderabad</td>
                    </tr>
                    <tr>
                        <td>AUTO BHAN EXPRESS CENTERS</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Autobhan Road Near Women Police Station Hyderabad</td>
                    </tr>
                    <tr>
                        <td>AREA OFFICE EXP:CENTRE</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Autobhan Road Near Toyota Motors Site Area Hyderabad</td>
                    </tr>
                    <tr>
                        <td>HIGH COURT EXPRES CENTER</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Session High Court Sindh Bar Council Hyderabad</td>
                    </tr>
                    <tr>
                        <td>FATIMA HEIGHTS EXPRESS CENTER</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Shop No. 12 Fatima Heights Saddar Hyderabad</td>
                    </tr>
                    <tr>
                        <td>SADDAR HYDERABAD CM</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Plot No. 113 Shop No. 05 Jail Road</td>
                    </tr>
                    <tr>
                        <td>JAIL ROAD HIRABAD EXPRESS CENTER</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Jail Road Express Center Plot No. 113 Shop No. 05</td>
                    </tr>
                    <tr>
                        <td>GMB Colony Express Center</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Shop No. 1 Opposite NBP GMB Colony Hyderabad</td>
                    </tr>
                    <tr>
                        <td>Chandani Chowk Express Center</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Chandani Chowk Near HBL Branch Satellite Town Mirpur Khas Hyderabad</td>
                    </tr>
                    <tr>
                        <td>Alamdar Chowk Express Center</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Shop No. 2 Hashim Galaxy Alamdar Chowk Hyderabad</td>
                    </tr>
                    <tr>
                        <td>Latifabad No. 9 Express Center</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Shop No. 7 Near A Section Police Station Main Airport Road Hyderabad</td>
                    </tr>
                    <tr>
                        <td>Kotri Express Center</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Shop No. 1 Opposite Civil Hospital Near PTCL Exchange Kotri District Jamshoro Hyderabad</td>
                    </tr>
                    <tr>
                        <td>Jamshoro Phattak Express Center</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>LUMHS Shopping Center Jamshoro Hyderabad</td>
                    </tr>
                    <tr>
                        <td>Jamshoro Society Express Center</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Plot A-15 Shop No. 2 SUECHS Phase 1 Jamshoro Hyderabad</td>
                    </tr>
                    <tr>
                        <td>Rabia Square Express Center</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>SHOP NO:7 RABIA SQUARE HYDER CHOCK HYDERABAD SINDH PAKISTAN</td>
                    </tr>
                    <tr>
                        <td>Makli</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Near Jamia Masjid Makli Market Opposite Water Tank Makli Hyderabad</td>
                    </tr>
                    <tr>
                        <td>Qila Chowk Tando Allahyar</td>
                        <td>Hyderabad</td>
                        <td>3169993026</td>
                        <td>Main Qila Chowk Near Bilal Masjid Police Station Tando Allahyar Hyderabad</td>
                    </tr>
                    <tr>
                        <td>LODHRAN EXPRESS CENTER</td>
                        <td>Lodhran</td>
                        <td>3169992892</td>
                        <td>Multan Road Opposite UBL Bank Lodhran</td>
                    </tr>
                    <tr>
                        <td>Super Chowk</td>
                        <td>Lodhran</td>
                        <td>3169992892</td>
                        <td>Pallya Wala Mouza Sumra Ada Permit Lodhran</td>
                    </tr>
                    <tr>
                        <td>Sambrial</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Near Makki Masjid Rasool Pura Sambrial Sialkot</td>
                    </tr>
                    <tr>
                        <td>KHADIM ALI ROAD MAIN EXPRESS</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Near MCB Khadim Ali Road Branch Sialkot</td>
                    </tr>
                    <tr>
                        <td>Kutchery Road Express Center</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Near FBR Office Sialkot</td>
                    </tr>
                    <tr>
                        <td>Rangpura Express Center</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Near Zaiqa Food Rungpura Chowk Sialkot</td>
                    </tr>
                    <tr>
                        <td>PARIS ROAD EXPRESS CENTRE</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Near GPO Opposite Askari Bank Paris Road Sialkot</td>
                    </tr>
                    <tr>
                        <td>Capital road Express Center</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Near Leather Field Indusrty Sialkot</td>
                    </tr>
                    <tr>
                        <td>Hajipura Express Center</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Near Ehsan Sports Sialkot</td>
                    </tr>
                    <tr>
                        <td>Kashmir Road Express Center</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Opposite Master Tile Kashmir Road Sialkot</td>
                    </tr>
                    <tr>
                        <td>Shahabpura Road Express Center</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Opposite Taq Cargo Sialkot</td>
                    </tr>
                    <tr>
                        <td>Sialkot Cantt. Express Center</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Near Jamia Masjid Al Kauser Sialkot Cantt.</td>
                    </tr>
                    <tr>
                        <td>Gohadpur Express Center</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Near Dr. Frig Surgical Gohad Pur Sialkot</td>
                    </tr>
                    <tr>
                        <td>PRR Road Express Center</td>
                        <td>Sialkot</td>
                        <td>3169992866</td>
                        <td>Near Habib Metro Bank Shahab Road Sialkot</td>
                    </tr>
                    <tr>
                        <td>Pasroor</td>
                        <td>Sialkot</td>
                        <td>N/A</td>
                        <td>NRL by Pass</td>
                    </tr>
                    <tr>
                        <td>Station Road Express Center</td>
                        <td>Shikarpur</td>
                        <td>3169992869</td>
                        <td>Lakhi Dar Station Road Shikarpur</td>
                    </tr>
                    <tr>
                        <td>JAIL ROAD SAHIWAL EXPRESS CENTER</td>
                        <td>Sahiwal</td>
                        <td>3169992892</td>
                        <td>79-C Canal Colony Farid Town Road Sahiwal</td>
                    </tr>
                    <tr>
                        <td>SIR SAYYED ROAD EXPRESS CENTER</td>
                        <td>Sahiwal</td>
                        <td>3169992892</td>
                        <td>Near Mission Hospital Sir Syed Road Sahiwal</td>
                    </tr>
                    <tr>
                        <td>Sahiwal EXPRESS CENTER</td>
                        <td>Sahiwal</td>
                        <td>3169992892</td>
                        <td>Main Bypass Chowk Sahiwal</td>
                    </tr>
                    <tr>
                        <td>PISHIN EXPRESS CENTER(Branch)</td>
                        <td>Pishin</td>
                        <td>3169992891</td>
                        <td>Shop No. 3 Salauddin Plaza Qazi Housing Scheme Near City Police Station Pishin</td>
                    </tr>
                    <tr>
                        <td>ATTOCK CITY EXPRESS CENTRE</td>
                        <td>Attock</td>
                        <td>3169992881</td>
                        <td>Shop B-144 Committee Chowk Near Bank Al Habib Attock</td>
                    </tr>
                    <tr>
                        <td>KASUR 2 EXPRESS CENTER</td>
                        <td>Kasur</td>
                        <td>3169993191</td>
                        <td>Branch Office Main Road Near Kutchery Kasur</td>
                    </tr>
                    <tr>
                        <td>KASUr EXPRESS CENTER</td>
                        <td>Kasur</td>
                        <td>3169993191</td>
                        <td>Kasur Express Center Near Masjid Noor Railway Road</td>
                    </tr>
                    <tr>
                        <td>District Court Kasur</td>
                        <td>Kasur</td>
                        <td>3169993191</td>
                        <td>Opposite Judicial complex, District court Kasur</td>
                    </tr>
                    <tr>
                        <td>Malakwal</td>
                        <td>Mandi Bahauddin</td>
                        <td>3169992866</td>
                        <td>Opposite Purani Ghalla Mandi Malakwal Mandi Bahauddin</td>
                    </tr>
                    <tr>
                        <td>Main Phalia Road Express Center</td>
                        <td>Mandi Bahauddin</td>
                        <td>3169992866</td>
                        <td>Beside MCB Phalia Road Mandi Bahauddin</td>
                    </tr>
                    <tr>
                        <td>Alvi Chowk Express Center</td>
                        <td>Mandi Bahauddin</td>
                        <td>3169992866</td>
                        <td>Opposite Askari Bank Alvi Chowk Mandi Bahauddin</td>
                    </tr>
                    <tr>
                        <td>Kamalia Express Center</td>
                        <td>Kamalia</td>
                        <td>3169992892</td>
                        <td>Near Old Lari Adda Shop No. 2 Chichawatni Road Kamalia</td>
                    </tr>
                    <tr>
                        <td>Turbat</td>
                        <td>Turbat</td>
                        <td>3169993027</td>
                        <td>
                            TCS Turbat Office
                        </td>
                    </tr>
                    <tr>
                        <td>Jehangira</td>
                        <td>Swabi</td>
                        <td>3169992890</td>
                        <td>Sadat Mobile Accessories Shop No. 1 &amp; 2 Khyber Trade Center GT Road Jahangira Peshawar</td>
                    </tr>
                    <tr>
                        <td>Swabi</td>
                        <td>Swabi</td>
                        <td>3169992881</td>
                        <td>Shop No. 2 Dildar Plaza Mardan Road Swabi</td>
                    </tr>
                    <tr>
                        <td>Yar Hussain</td>
                        <td>Swabi</td>
                        <td>3169992881</td>
                        <td>Sadiq Medical Store Main Bazar Yar Hussain</td>
                    </tr>
                    <tr>
                        <td>Pahar Pur</td>
                        <td>Dera Ismail Khan</td>
                        <td>3169992870</td>
                        <td>Lari Adda Near GPO Pahar Pur Dera Ismail Khan</td>
                    </tr>
                    <tr>
                        <td>Tank</td>
                        <td>Dera Ismail Khan</td>
                        <td>3169992870</td>
                        <td>Madina Market Traffic Point Tank Dera Ismail Khan</td>
                    </tr>
                    <tr>
                        <td>Wana</td>
                        <td>Dera Ismail Khan</td>
                        <td>3169992870</td>
                        <td>Bakht Alam Market Shop No. 10 Main Bazar Wana Dera Ismail Khan</td>
                    </tr>
                    <tr>
                        <td>Dera Ismail Khan Express Center</td>
                        <td>Dera Ismail Khan</td>
                        <td>3169992870</td>
                        <td>South Circular Road Near Shell Petrol Pump Dera Ismail Khan</td>
                    </tr>
                    <tr>
                        <td>Bannu Road Express Center</td>
                        <td>Dera Ismail Khan</td>
                        <td>3169992870</td>
                        <td>Bannu Road Kashmir Chowk Dera Ismail Khan</td>
                    </tr>
                    <tr>
                        <td>Oghi</td>
                        <td>Mansehra</td>
                        <td>3169992691</td>
                        <td>Aziz Je Communication Al Fakhar Plaza Tauheed Road Oghi Mansehra</td>
                    </tr>
                    <tr>
                        <td>Battagram</td>
                        <td>Mansehra</td>
                        <td>3169992691</td>
                        <td>Mobile Linker Main Bazar Near UBL Battagram Mansehra</td>
                    </tr>
                    <tr>
                        <td>Besham</td>
                        <td>Mansehra</td>
                        <td>3169992691</td>
                        <td>Shahjee Super Mart Gilgit Road Main Bazar Bank Square Besham Mansehra</td>
                    </tr>
                    <tr>
                        <td>Shinkiari</td>
                        <td>Mansehra</td>
                        <td>3169992691</td>
                        <td>Faraz Market Islamabad Shinkiari Mansehra</td>
                    </tr>
                    <tr>
                        <td>MANSEHRA EXPRESS CENTRE</td>
                        <td>Mansehra</td>
                        <td>3169992691</td>
                        <td>Mansehra Express Center Abbotabad road Near Ahsiyana Hotel</td>
                    </tr>
                    <tr>
                        <td>Panjgur</td>
                        <td>Panjgur</td>
                        <td>3169993027</td>
                        <td>Old Thana Road Panjgur</td>
                    </tr>
                    <tr>
                        <td>KOT ADDU EXPRESS CENTER</td>
                        <td>Kot Addu</td>
                        <td>3169992704</td>
                        <td>GT Road Kot Addu</td>
                    </tr>
                    <tr>
                        <td>Mir Pur Khas Express Center</td>
                        <td>Mirpur Khas</td>
                        <td>3169993026</td>
                        <td>Shop No. 07 Shabana Lodge Hotel Station Road Mirpur Khas</td>
                    </tr>
                    <tr>
                        <td>MUZAFFARABAD EXPRESS CENTRE</td>
                        <td>Muzaffarabad</td>
                        <td>3169992691</td>
                        <td>Old Secretariat Opposite Bank Of Punjab Near Pakiza Bakers Muzaffarabad</td>
                    </tr>
                    <tr>
                        <td>Hasilpur Express Center</td>
                        <td>Hasilpur</td>
                        <td>3169992892</td>
                        <td>83-C Inside Baldia Road Behind NBP Main Branch Hasilpur</td>
                    </tr>
                    <tr>
                        <td>Nawabshah Express Center</td>
                        <td>Nawabshah</td>
                        <td>3169993026</td>
                        <td>Sumera Palace Hospital Road Nawabshah</td>
                    </tr>
                    <tr>
                        <td>Katchery Road Express Center</td>
                        <td>Nawabshah</td>
                        <td>3169993026</td>
                        <td>Shop No. 7 Al-Sajjad Shopping Center Old Shiraz Chowk Katchery Road Nawabshah</td>
                    </tr>
                    <tr>
                        <td>Hafizabad Express Center (Ground Courier)</td>
                        <td>Hafizabad</td>
                        <td>3169992866</td>
                        <td>Opposite Ghalla Mandi Jalal Pur Bhattian Hafizabad</td>
                    </tr>
                    <tr>
                        <td>Hafizabad Express Center</td>
                        <td>Hafizabad</td>
                        <td>3169992866</td>
                        <td>Near MCB Rail Bazar Hafizabad</td>
                    </tr>
                    <tr>
                        <td>Pindi Bhatian</td>
                        <td>Chiniot</td>
                        <td>3169992870</td>
                        <td>HNo. 276/12 Street No. 9 Mohalah Hassan Pura Pindi Bhattian Chiniot</td>
                    </tr>
                    <tr>
                        <td>Mohallah Garha Express Center</td>
                        <td>Chiniot</td>
                        <td>3169992870</td>
                        <td>Shop No. 1 Near Fire Brigade Office Chiniot</td>
                    </tr>
                    <tr>
                        <td>Tehsil Chowk</td>
                        <td>Chiniot</td>
                        <td>3169992870</td>
                        <td>Tehsil Chowk Opposite DC Office Jhang Road Chiniot</td>
                    </tr>
                    <tr>
                        <td>Uthal</td>
                        <td>Uthal</td>
                        <td>3169993027</td>
                        <td>
                            TCS Office Main RCD Road Uthal Uthal
                        </td>
                    </tr>
                    <tr>
                        <td>KABIRWALA EXPRESS CENTER</td>
                        <td>Kabirwala</td>
                        <td>3169992892</td>
                        <td>Opposite NBP Khanewal Road Kabirwala</td>
                    </tr>
                    <tr>
                        <td>Gwadar</td>
                        <td>Gwadar</td>
                        <td>3169993027</td>
                        <td>Gazarwan Super Market Gwadar</td>
                    </tr>
                    <tr>
                        <td>Ahmedpur Sial</td>
                        <td>Jhang</td>
                        <td>3169992870</td>
                        <td>Meo Chowk Ahmedpur Sial Jhang</td>
                    </tr>
                    <tr>
                        <td>18-Hazari</td>
                        <td>Jhang</td>
                        <td>3169992870</td>
                        <td>PO Wasu Astana Tehsil 18-Hazari Jhang</td>
                    </tr>
                    <tr>
                        <td>Bhawana</td>
                        <td>Jhang</td>
                        <td>3169992870</td>
                        <td>Old Lari Adda Girls College Road Bhawana Jhang</td>
                    </tr>
                    <tr>
                        <td>Garh More</td>
                        <td>Jhang</td>
                        <td>3169992870</td>
                        <td>Al-Nadeem Mobiles &amp; Photostate Garh More Jhang</td>
                    </tr>
                    <tr>
                        <td>Rodu Sultan</td>
                        <td>Jhang</td>
                        <td>3169992870</td>
                        <td>Life Photostate &amp; Printing Service Rodu Sultan Jhang</td>
                    </tr>
                    <tr>
                        <td>Naya Lahore</td>
                        <td>Jhang</td>
                        <td>3169992870</td>
                        <td>Main Adda Opposite MCB Bank New Lahore Jhang</td>
                    </tr>
                    <tr>
                        <td>Jhang Express Center</td>
                        <td>Jhang</td>
                        <td>3169992870</td>
                        <td>Waryam Chowk, P/O Qaim Bharwana, Tehsil Shorkot, Dist Jhang.</td>
                    </tr>
                    <tr>
                        <td>Main Office Express Center</td>
                        <td>Jhang</td>
                        <td>3169992870</td>
                        <td>Mohallah Samanabad Toba Road Saddar Jhang</td>
                    </tr>
                    <tr>
                        <td>Satellite Town Express Center</td>
                        <td>Jhang</td>
                        <td>3169992870</td>
                        <td>Main Satellite Town Road Near Alqudoos General Store Jhang</td>
                    </tr>
                    <tr>
                        <td>Adda Moza Bagh Jhang</td>
                        <td>Jhang</td>
                        <td>3169992870</td>
                        <td>Kalma Building, Town Committi, Moza Bagh, Near Siyal Iron Store, Main Tuba Road.</td>
                    </tr>
                    <tr>
                        <td>Mongi Bangla</td>
                        <td>Gojra</td>
                        <td>3169992870</td>
                        <td>Abdullah Garden Near Civil Hospital Mongi Bangla Gojra</td>
                    </tr>
                    <tr>
                        <td>Gojra Express Center</td>
                        <td>Gojra</td>
                        <td>3169992870</td>
                        <td>Main Painsra Road Gojra</td>
                    </tr>
                    <tr>
                        <td>Sanghar Express Center</td>
                        <td>Sanghar</td>
                        <td>3169993026</td>
                        <td>Shop No. 2 Bait-ul-Fazal Building M.A. Jinnah Road Sanghar</td>
                    </tr>
                    <tr>
                        <td>Sanghar</td>
                        <td>Sanghar</td>
                        <td>N/A</td>
                        <td>Soriya Badshah Shopping Mall, Nawabshah Road, Sanghar</td>
                    </tr>
                    <tr>
                        <td>Isa Khel</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>Near 1122 Office Main Adda Isa Khel Sargodha</td>
                    </tr>
                    <tr>
                        <td>Lalian</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>Chaman Brother Jamia Masjid Road Lalian Sargodha</td>
                    </tr>
                    <tr>
                        <td>Sahiwal</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>Karkhana Tehsil Sahiwal District Sargodha</td>
                    </tr>
                    <tr>
                        <td>Sillanwali</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>Railway Road Adjacent Gulzar-e-Madina Mosque Sillanwali Sargodha</td>
                    </tr>
                    <tr>
                        <td>Sial More</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>Mushtaq Book Depot Main Bazar Sial More Sargodha</td>
                    </tr>
                    <tr>
                        <td>Shahpur</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>Jail Road Saddar Shahpur Sargodha</td>
                    </tr>
                    <tr>
                        <td>Khushab Road Express Center</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>Khushab Road Block No. 7 Sargodha</td>
                    </tr>
                    <tr>
                        <td>Main Sargodha Express Center</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>51 Old Civil Lines Kutchery Road Near Cheema Chowk Sargodha</td>
                    </tr>
                    <tr>
                        <td>Eid Gah Road Express Center</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>Block No. 18 Eid Gah Road Sargodha</td>
                    </tr>
                    <tr>
                        <td>47 Adda Opp. Dawoo Terminal Express Center</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>Pir Muhammad Colony University Road Opposite Daewoo Terminal Sargodha</td>
                    </tr>
                    <tr>
                        <td>Education Board Express Center</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>Opposite Secondary Board 49-Tail Faisalabad Road Sargodha</td>
                    </tr>
                    <tr>
                        <td>Satellite Town Chowk Express Center</td>
                        <td>Sargodha</td>
                        <td>3169992870</td>
                        <td>Shop No. 143 Old Satellite Town Block-A Sargodha</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
}
