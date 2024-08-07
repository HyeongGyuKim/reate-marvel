import MockAdapter from 'axios-mock-adapter';
import api from '../helpers/interceptor/axios.js';

const mock = new MockAdapter(api);
    mock.onGet("/dashboard/section2").reply(() => {
        return [200, {
            data: [
                {img: '/dashboard/section_2/ironman1.jpg', title: '아이언맨', desc: `천재적인 두뇌와 재능으로 세계 최강의 무기업체를 이끄는 CEO이자, 타고난 매력으로 셀러브리티 못지않은 화려한 삶을 살아가던 억만장자 토니 스타크. 아프가니스탄에서 자신이 개발한 신무기 발표를 성공리에 마치고 돌아가던 그는 게릴라군의 갑작스런 공격에 의해 가슴에 치명적인 부상을 입고 게릴라군에게 납치된다.`, date: '2008.04.30', director: '존 파브로', actor: `로버트 다우니 주니어, 테렌스 하워드, 제프 브리지스, 기네스 팰트로`},
                {img: '/dashboard/section_2/incrediblehulk.jpg', title: '인크레더블 헐크', desc: `실험 중 감마선에 노출된 이후 분노를 통제할 수 없는 상태가 되면 녹색 괴물 ‘헐크’로 변하게 되는 브루스 배너(에드워드 노튼). 필사적으로 치료제 개발에 매달리지만, 그의 능력을 이용하려는 정부 군대의 끈질긴 추격을 받고 쫓기게 된다. 한편 헐크의 거대한 힘의 비밀을 파헤치던 이들은 헐크보다 더 파괴적인 ‘어보미네이션’을 만드는데 성공, 도시 전체를 집어삼키려 한다. 이에 브루스 배너는 정상적인 인생을 되찾으려던 계획을 버리고, 어보미네이션과 정부 군대, 그리고 자기 자신과의 마지막 대결을 준비하는데...`, date: '2008.06.12', director: '루이스 리터리어', actor: `에드워드 노튼, 리브 타일러, 팀 로스`},
                {img: '/dashboard/section_2/ironman2.jpg', title: '아이언맨 2', desc: `자신이 아이언맨이라고 정체를 밝힌 뒤 할리우드 스타 못지 않은 인기를 누리던 토니 스타크. 스타크 인더스트리의 운영권을 수석 비서였던 페퍼포츠에게 일임하고 즐거운 나날을 보내던 그에게 생애 최고의 위기가 찾아온다. ‘스타크’ 가문에 대한 적대감으로 가득 찬 ‘위플래시’가 아이언맨 수트의 원천 기술인 아크 원자로 개발에 성공한 것. F-1 그랑프리에 출전하여 무방비 상태에 있던 토니 스타크에게 위협적인 공격을 가하는 위플래쉬. 이에 토니 스타크는 새로 개발한 업그레이드 수트를 이용, 겨우 위기를 모면한다. 하지만 이 사건을 계기로 위플래시는 토니 스타크의 라이벌 ‘저스틴 해머’와 손을 잡고 아이언맨을 공격하기 시작하고, 이에 토니 스타크는 오랜 동료 제임스 로드를 위한 새로운 하이테크 수트를 제작, ‘워 머신’으로 거듭난 그와 함께 강력해진 적들과의 본격적 대결에 나서는데…!`, date: '2010.04.29', director: '존 파브로', actor: `로버트 다우니 주니어, 기네스 팰트로, 돈 치들, 스칼렛 요한슨, 미키 루크`},
                {img: '/dashboard/section_2/thor1.jpg', title: '토르: 천둥의 신', desc: `신의 세계 ‘아스가르드’의 후계자로 강력한 파워를 지닌 천둥의 신 ‘토르’. 평소 거침없는 성격의 소유자인 토르는 신들간의 전쟁을 일으킨 죄로 신의 자격을 박탈당한 채 지구로 추방당한다. 힘의 원천인 해머 ‘묠니르’도 잃어버린 채 하루 아침에 평범한 인간이 되어버린 토르는 혼란스러움을 뒤로 한 채 지구에서 처음 마주친 과학자 ‘제인’ 일행과 함께 하며 인간 세계에 적응해 나가기 시작한다. 하지만 그 사이 아스가르드는 후계자 자리를 노리는 ‘로키’의 야욕으로 인해 혼란에 빠진다. 후계자로 지목된 자신의 형 토르를 제거하려는 로키는 마침내 지구에까지 무차별적인 공격을 시작한다. 자신의 존재 때문에 지구에 거대한 위험이 닥치고 있음을 알게 된 토르. 그런 그의 앞에 보다 강력한 파괴력의 상대가 등장하는데… 두 개의 세계, 한 명의 영웅 모두의 운명을 건 최후의 격돌이 시작된다!`, date: '2011.04.28', director: '케네스 비래더', actor: `크리스 헴스워스, 나탈리 포트만, 톰 히들스턴, 안소니 홉킨스, 스텔란 스카스가드, 캣 데닝스`},
                {img: '/dashboard/section_2/captainamerica1.jpg', title: '캡틴 아메리카: 퍼스트 어벤져', desc: `포기를 모르는 자의 새로운 이름 ‘퍼스트 어벤져’ 세계 전쟁으로 암흑에 빠진 시기, 한 남자가 군 입대를 자원한다. 그의 이름은 ‘스티브 로저스’. 남들보다 왜소하고 마른 체격으로 인해 입대마저 번번히 거부당하던 그는 포기를 모르는 근성과 강한 희생 정신을 인정받아 최고의 전사를 양성하는 ‘슈퍼 솔져’ 프로젝트에 스카우트된다. 비밀리에 진행된 실험을 통해 가장 완벽한 육체와 인간의 한계를 초월한 신체 능력을 얻게 된 스티브. 그는 모두에게 ‘캡틴’으로 불리며, 시대의 영웅으로 새롭게 태어난다. 하지만 그의 등장에 맞서 거대한 ‘히드라’ 조직을 앞세운 적의 공격은 한층 막강해지고, 그 핵심에 선 ‘레드 스컬’은 인류를 위협하는 최후의 전투를 준비하는데... 세계를 위협하는 전쟁, 그 한가운데로 향한 ‘캡틴’ 슈퍼히어로의 역사로 남을 그의 활약이 시작된다!`, date: '2011.07.28', director: '조 존스톤', actor: `크리스 에반스, 토미 리존스, 휴고 위빙, 헤일리 앳웰`},
                {img: '/dashboard/section_2/avengers1.jpg', title: '어벤져스', desc: `지구의 안보가 위협당하는 위기의 상황에서 슈퍼히어로들을 불러모아 세상을 구하는, 일명 [어벤져스] 작전. 에너지원 ‘큐브’를 이용한 적의 등장으로 인류가 위험에 처하자 국제평화유지기구인 쉴드 (S.H.I.E.L.D)의 국장 닉 퓨리(사무엘 L.잭슨)는 [어벤져스] 작전을 위해 전 세계에 흩어져 있던 슈퍼히어로들을 찾아나선다. 아이언맨(로버트 다우니 주니어)부터 토르(크리스 헴스워스), 헐크(마크 러팔로), 캡틴 아메리카(크리스 에반스)는 물론, 쉴드의 요원인 블랙 위도우(스칼렛 요한슨), 호크 아이(제레미 레너)까지, 최고의 슈퍼히어로들이 [어벤져스]의 멤버로 모이게 되지만, 각기 개성이 강한 이들의 만남은 예상치 못한 방향으로 흘러가는데…`, date: '2012.04.26', director: '조스 웨던', actor: `로버트 다우니 주니어, 스칼렛 요한슨, 크리스 헴스워스, 크리스 에반스, 마크 러팔로, 레제미 레너, 사무엘 L.잭슨, 톰 히들스턴`},
                {img: '/dashboard/section_2/ironman3.jpg', title: '아이언맨 3', desc: `어벤져스 뉴욕 사건의 트라우마로 인해 영웅으로서의 삶에 회의를 느끼는 토니 스타크(로버트 다우니 주니어). 그가 혼란을 겪는 사이 최악의 테러리스트 만다린(벤 킹슬리)을 내세운 익스트리미스 집단 AIM이 스타크 저택에 공격을 퍼붓는다. 이 공격으로 그에게 남은 건 망가진 수트 한벌 뿐. 모든 것을 잃어버린 그는 다시 테러의 위험으로부터 세계와 사랑하는 여인(기네스 팰트로)를 지켜내야 하는 동시에 머릿속을 떠나지 않던 한가지 물음의 해답도 찾아야만 한다. 과연 그가 아이언맨인가? 수트가 아이언맨인가?`, date: '2013.04.25', director: '셰인 블랙', actor: `로버트 다우니 주니어, 기네스 팰트로, 벤 킹슬러, 돈 치들, 가이 피어스, 레베카 홀`},
                {img: '/dashboard/section_2/thor2.jpg', title: '토르: 다크월드', desc: `어벤져스의 뉴욕 사건 후, 다시 신들의 고향인 아스가르드 왕국으로 돌아간 토르(크리스 헴스워스)와 로키(톰 히들스턴). 지구를 위협한 로키는 지하 감옥에 갇히고, 토르는 아버지 오딘(안소니 홉킨스)과 함께 우주의 질서를 재정립하기 위해 나선다. 1년 후, 지구에 혼자 남은 제인(나탈리 포트만)은 우연히 태초부터 존재해왔던 어둠의 종족 ‘다크 엘프’의 무기 ‘에테르’를 얻게 된다. 이 사실을 안 ‘다크 엘프’의 리더 ‘말레키스’는 ‘에테르’를 되찾기 위해 제인과 아스가르드를 공격하고, 토르는 사랑하는 여인 제인과 아스가르드 왕국을 지키기 위해 로키에게 위험한 동맹을 제안하게 된다.`, date: '2013.10.30', director: '앨런 테일러', actor: `크리스 햄스워스, 나탈리 포트만, 톰 히들스턴, 안소니 홉킨스, 크리스토퍼 에클리스턴, 이드리스 엘바`},
                {img: '/dashboard/section_2/captainamerica2.jpg', title: '캡틴 아메리카: 윈터솔져', desc: `어벤져스의 뉴욕 사건 이후 닉 퓨리, 블랙 위도우와 함께 쉴드의 멤버로 현대 생활에 적응해 살아가는 캡틴 아메리카. 어느 날, 죽은 줄 알았던 친구 버키가 적 윈터 솔져가 되어 돌아오고, 어벤져스를 향한 최악의 위기가 시작된다.`, date: '2014.03.26', director: '조 루소, 안소니 루소', actor: `크리스 에반스, 스칼렛 요한슨, 사무엘 L.잭슨`},
                {img: '/dashboard/section_2/guardians1.jpg', title: '가디언즈 오브 갤럭시', desc: `자칭 전설의 무법자 스타로드, 그러나 현실은 우주를 떠도는 그저그런 좀도둑에 불과한 피터 퀼(크리스 프랫). 뜻하지 않게 갤럭시의 절대악 타노스와 로난의 타겟이 된 그는 감옥에서 만난 암살자 가모라(조 샐다나), 거구의 파이터 드랙스(데이브 바티스타), 현상금 사냥꾼 로켓(브래들리 쿠퍼)과 그루트(빈 디젤) 콤비와 불편한 동맹을 맺고 일명 ‘가디언즈 오브 갤럭시’를 결성한다. 범상치 않은 화려한 과거를 지닌 이들이 과연 120억 명의 운명을 구할 유일한 희망이 될 수 있을까? 흩어지면 무법자, 뭉치면 히어로 차원이 다른 마블의 새로운 세계를 목격하라!`, date: '2014.07.31', director: '제임스 건', actor: `크리스 프랫, 조 샐다나, 데이브 바티스타, 빈 디젤, 브래들리 쿠퍼, 리 페이스`},
                {img: '/dashboard/section_2/avengers2.jpg', title: '어벤져스: 에이지 오브 울트론', desc: `쉴드의 숙적 히드라는 연구를 통해 새로운 능력자 막시모프 남매를 탄생시키고, 히드라의 기지를 공격하는 도중 토니 스타크는 완다 막시모프의 초능력으로 인해 자신이 가장 두려워하는 미래를 보게 된다. 이에 '뉴욕전쟁' 때와 같은 사태가 벌어지지 않도록 스타크는 배너 박사와 함께 지구를 지킬 최강의 인공지능 울트론을 탄생시키게 되지만, 울트론은 예상과 다르게 지배를 벗어나 폭주하기 시작하는데...`, date: '2015.04.23', director: '조스 웨던', actor: `로버트 다우니 주니어, 스칼렛 요한슨, 크리스 헴스워스, 크리스 에반스, 마크 러팔로, 레제미 레너, 돈치들, 제임스 스페이더, 사무엘 L.잭슨`},
                {img: '/dashboard/section_2/antman1.jpg', title: '앤트맨', desc: `하나뿐인 딸에게 멋진 아빠이고 싶지만, 현실은 생계형 도둑인 스캇 랭(폴 러드). 어느 날 그에게 몸을 자유자재로 늘리거나 줄일 수 있는 핌 입자를 개발한 과학자 행크 핌(마이클 더글라스)이 찾아와 수트와 헬멧을 건네며 ‘앤트맨’이 되어 줄 것을 요청한다. 어리둥절 하지만 일단 한번 해보기로 결심한 스캇 랭은 행크 핌의 딸인 호프(에반젤린 릴리)의 도움을 받아 점차 히어로의 면모를 갖추어가고, 그의 스승이자 멘토인 행크 핌 박사를 도와 핌 입자를 악용하려는 세력을 막아야 하는데… 마블 유니버스의 새로운 세계가 이제 그의 손에 달렸다!`, date: '2015.09.03', director: '페이튼 리드', actor: `폴 러드, 마이클 더글라스, 에반젤린 릴리, 코리 스톨`},
                {img: '/dashboard/section_2/captainamerica2.jpg', title: '캡틴 아메리카: 시빌 워', desc: `어벤져스 VS 어벤져스 분열은 시작되었다! 어벤져스와 관련된 사고로 부수적인 피해가 일어나자 정부는 어벤져스를 관리하고 감독하는 시스템인 일명 ‘슈퍼히어로 등록제’를 내놓는다. 어벤져스 내부는 정부의 입장을 지지하는 찬성파(팀 아이언맨)와 이전처럼 정부의 개입 없이 자유롭게 인류를 보호해야 한다는 반대파(팀 캡틴)로 나뉘어 대립하기 시작하는데...`, date: '2016.04.27', director: '조 루소, 안소니 루소', actor: `로버트 다우니 주니어, 크리스 에반스, 스칼렛 요한슨`},
                {img: '/dashboard/section_2/dr.Strange1.jpg', title: '닥터 스트레인지', desc: `불의의 사고로 절망에 빠진 천재 외과의사 ‘닥터 스트레인지(베네딕트 컴버배치)’. 마지막 희망을 걸고 찾아 간 곳에서 ‘에인션트 원(틸다 스윈튼)’을 만나 세상을 구원할 강력한 능력을 얻게 되면서, 모든 것을 초월한 최강의 히어로로 거듭나는데...`, date: '2016.10.26', director: '스콧 데릭슨', actor: `베네딕트 컴버배치, 레일첼 맥아담스, 틸다 스윈튼, 매즈 미켈슨, 치웨텔 에지오포`},
                {img: '/dashboard/section_2/guardians2.jpg', title: '가디언즈 오브 갤럭시 Vol.2', desc: `최강 빌런 ‘타노스’에 맞서 은하계를 구하고 최고의 해결사로 등극한 ‘가.오.갤’ 멤버들. 하지만 외계 여사제 ‘아이샤’가 맡긴 임무를 수행하던 중 실수로 또 다시 쫓기는 신세로 전락한다. 한편 자신에게 숨겨진 힘의 원천에 대해 고민하던 리더 ‘스타로드’는 갑작스레 나타난 아버지로 인해 또 다른 위기에 빠지게 되는데…`, date: '2017.05.03', director: '제임스 건', actor: `크리스 프랫, 조 샐다나, 데이브 바티스타, 빈 디젤, 브래들리 쿠퍼`},
                {img: '/dashboard/section_2/spiderman1.jpg', title: '스파이더맨: 홈 커밍', desc: `‘시빌 워’ 당시 ‘토니 스타크’(로버트 다우니 주니어)에게 발탁되어 대단한 활약을 펼쳤던 스파이더맨 ‘피터 파커’(톰 홀랜드). 그에게 새로운 수트를 선물한 ‘토니 스타크’는 위험한 일은 하지 말라며 조언한다. 하지만 허세와 정의감으로 똘똘 뭉친 ‘피터 파커’는 세상을 위협하는 강력한 적 ‘벌처’(마이클 키튼)에 맞서려 하는데… 아직은 어벤져스가 될 수 없는 스파이더맨 숙제보다 세상을 구하고 싶은 스파이더맨 그는 과연 진정한 히어로로 거듭날 수 있을 것인가!`, date: '2017.07.05', director: '존 왓츠', actor: `톰 홀랜드, 마이클 키튼`},
                {img: '/dashboard/section_2/thor3.jpg', title: '토르: 라그나로크', desc: `죽음의 여신 ‘헬라’가 아스가르드를 침략하고, 세상은 모든 것의 종말 ‘라그나로크’의 위기에 처한다. 헬라에게 자신의 망치마저 파괴당한 토르는 어벤져스 동료인 헐크와도 피할 수 없는 대결을벌이면서 절체절명의 위기에 빠지게 되는데…`, date: '2017.10.25', director: '타이카 와이티티', actor: `크리스 헴스워스, 마크 러팔로, 톰 히들스턴, 케이트 블란쳇`},
                {img: '/dashboard/section_2/blackpanther2.jpg', title: '블랙팬서', desc: `‘시빌 워’ 이후 와칸다의 왕위를 계승한 티찰라(채드윅 보스만)는 와칸다에만 존재하는 최강 희귀 금속 ‘비브라늄’과 왕좌를 노리는 숙적들의 음모가 전세계적인 위협으로 번지자 세상을 구할 히어로 ‘블랙 팬서’로서 피할 수 없는 전쟁에 나서는데…`, date: '2018.02.14', director: '라이언 쿠글러', actor: `채드윅 보스만`},
                {img: '/dashboard/section_2/infinitywar.jpg', title: '어벤져스: 인피니티 워', desc: `새로운 조합을 이룬 어벤져스, 역대 최강 빌런 타노스에 맞서 세계의 운명이 걸린 인피니티 스톤을 향한 무한 대결이 펼쳐진다! 마블의 클라이맥스를 목격하라!`, date: '2018.04.25', director: '조 루소, 안소니 루소', actor: `로버트 다우니 주니어, 조슈 브롤린, 크리스 헴스워스, 베네딕트 컴버배치, 크리스 프랫, 마크 러팔로, 톰 홀랜드, 채드윅 보스만, 크리스 에반스`},
                {img: '/dashboard/section_2/antman2.jpg', title: '앤트맨과 와스프', desc: `‘시빌 워’ 사건 이후 은둔하며 히어로와 가장의 역할 사이에서 고민 중이던 ‘앤트맨’과 새로운 파트너 ‘와스프’ 앞에 정체불명의 빌런 ‘고스트’가 등장한다. 시공간의 개념이 사라진 양자 영역으로 들어갈 수 있는 기술을 훔쳐 달아난 고스트를 쫓던 앤트맨과 와스프는 상상도 못했던 상황에 직면하는데…`, date: '2018.07.04', director: '페이튼 리드', actor: `폴 러드, 에반젤린 릴리, 마이클 더글라스, 마이클 페나, 로렌스 피시번, 미셸 파이퍼, 헤나 존-케이먼`},
                {img: '/dashboard/section_2/captainmarvel.jpg', title: '캡틴 마블', desc: `1995년, 공군 파일럿 시절의 기억을 잃고 크리족 전사로 살아가던 캐럴 댄버스(브리 라슨)가 지구에 불시착한다. 쉴드 요원 닉 퓨리(사무엘 L. 잭슨)에게 발견되어 팀을 이룬 그들은 지구로 향하는 더 큰 위협을 감지하고 힘을 합쳐 전쟁을 끝내야 하는데…`, date: '2019.03.06', director: '애너 보든, 라이언 플렉', actor: `브리 라슨, 사무엘 L.잭슨, 벤 멘델슨, 주드 로`},
                {img: '/dashboard/section_2/endgame.jpg', title: '어벤져스: 앤드게임', desc: `인피니티 워 이후 절반만 살아남은 지구 마지막 희망이 된 어벤져스 먼저 떠난 그들을 위해 모든 것을 걸었다! 위대한 어벤져스 운명을 바꿀 최후의 전쟁이 펼쳐진다!`, date: '2019.04.24', director: '조 루소, 안소니 루소', actor: `로버트 다우니 주니어, 조슈 브롤린, 크리스 헴스워스, 베네딕트 컴버배치, 크리스 프랫, 마크 러팔로, 톰 홀랜드, 채드윅 보스만, 크리스 에반스`},
                {img: '/dashboard/section_2/spiderman2.jpg', title: '스파이더맨: 파 프롬 홈', desc: `‘엔드게임’ 이후 변화된 세상, 스파이더맨 ‘피터 파커’는 학교 친구들과 유럽 여행을 떠나게 된다. 그런 그의 앞에 ‘닉 퓨리’가 등장해 도움을 요청하고 정체불명의 조력자 ‘미스테리오’까지 합류하게 되면서 전 세계를 위협하는 새로운 빌런 ‘엘리멘탈 크리쳐스’와 맞서야만 하는 상황에 놓이게 되는데…`, date: '2019.07.02', director: '존 왓츠', actor: `톰 홀랜드, 사무엘 L.잭슨, 젠데이아 콜먼`},
                {img: '/dashboard/section_2/blackwidow.jpg', title: '블랙위도우', desc: `어벤져스의 히어로 블랙 위도우, ‘나타샤 로마노프’ (스칼렛 요한슨)는 자신의 과거와 연결된 레드룸의 거대한 음모와 실체를 깨닫게 된다. 상대의 능력을 복제하는 빌런 ‘태스크마스터’와 새로운 위도우들의 위협에 맞서 목숨을 건 반격을 시작하는 ‘나타샤’는 스파이로 활약했던 자신의 과거 뿐 아니라, 어벤져스가 되기 전 함께했던 동료들을 마주해야만 하는데… 폭발하는 리얼 액션 카타르시스! MCU의 새로운 시대를 시작할 첫 액션 블록버스터를 만끽하라!`, date: '2021.07.07', director: '케이트 쇼트랜드', actor: `스칼렛 요한슨, 플로렌스 퓨, 레이첼 와이즈, 데이빗 하버`},
                {img: '/dashboard/section_2/shangchi.jpg', title: '샹치와 텐 링즈의 전설', desc: `초인적인 능력을 가진 ‘텐 링즈’의 힘으로 수세기 동안 어둠의 세상을 지배해 온 ‘웬우’ '샹치’는 아버지 ‘웬우’ 밑에서 암살자로 훈련을 받았지만 이를 거부하고 평범함 삶을 선택한다. 그러나 ‘샹치’는 목숨을 노리는 자들의 습격으로 더 이상 운명을 피할 수 없다는 것을 직감하고, 어머니가 남긴 가족의 비밀과 내면의 신비한 힘을 일깨우게 된다 벗어나고 싶은 과거이자, 그 누구보다 두려운 아버지 ‘웬우’를 마주해야 하는 ‘샹치’ 악이 될 것인가? 구원이 될 것인가? 마블의 새로운 시대, 세상에 없던 힘이 탄생한다!`, date: '2021.09.01', director: '데스틴 크리튼', actor: `시무 리우, 양조위, 아콰피나`},
                {img: '/dashboard/section_2/eternals.jpg', title: '이터널스', desc: `마블 스튜디오의 이터널스는 수 천년에 걸쳐 그 모습을 드러내지 않고 살아온 불멸의 히어로들이 어벤져스: 엔드게임 이후 인류의 가장 오래된 적 '데비안츠'에 맞서기 위해 다시 힘을 합치면서 벌어지는 이야기`, date: '2021.11.03', director: '클로이 자오', actor: `안젤리나 졸리, 마동석, 리자드 매든, 쿠마일 난지아니, 셀마 헤이엑, 젬마 찬, 로런 리들로프, 브라이언 타이리 헨리, 배리 케오간, 리아 맥휴`},
                {img: '/dashboard/section_2/spiderman3.jpg', title: '스파이더맨: 노웨이 홈', desc: `‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는 하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 ‘닥터 스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를 비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…`, date: '2021.12.15', director: '존 왓츠', actor: `톰 홀랜드, 젠데이아 콜먼, 베네딕트 컴버배치, 존 파브로, 제이콥 배덜런, 마리사 토메이, 알프리드 몰리나`},
                {img: '/dashboard/section_2/dr.Strange2.jpg', title: '닥터 스트레인지: 대혼돈의 멀티버스', desc: `끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며 오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’. 대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데…`, date: '2022.05.04', director: '샘 레이미', actor: `베네딕트 컴버배치, 엘리자베스 올슨`},
                {img: '/dashboard/section_2/thor4.jpg', title: '토르: 러브 앤 썬더', desc: `슈퍼 히어로 시절이여, 안녕! 이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 ‘토르’ 그러나, 우주의 모든 신들을 몰살하려는 신 도살자 ‘고르’의 등장으로 ‘토르’의 안식년 계획은 산산조각 나버린다. ‘토르’는 새로운 위협에 맞서기 위해, ‘킹 발키리’, ‘코르그’, 그리고 전 여자친구 ‘제인’과 재회하게 되는데, 그녀가 묠니르를 휘두르는 ‘마이티 토르’가 되어 나타나 모두를 놀라게 한다. 이제, 팀 토르는 ‘고르’의 복수에 얽힌 미스터리를 밝히고 더 큰 전쟁을 막기 위한 전 우주적 스케일의 모험을 시작하는데... 우주 최고의 ‘갓’ 매치가 시작된다!`, date: '2022.07.06', director: '타이카 와이티티', actor: `크리스 헴스워스, 나탈리 포트만, 테사 톰슨, 크리스찬 베일, 타이카 와이티티, 크리스 프랫`},
                {img: '/dashboard/section_2/blackpanther2.jpg', title: '블랙 팬서: 와칸다 포에버', desc: `국왕이자 ‘블랙 팬서’인 '티찰라'의 죽음 이후 수많은 강대국으로부터 위협을 받게 된 '와칸다'. '라몬다', '슈리' 그리고 '나키아', '오코예, '음바쿠'는 각자 사명감을 갖고 '와칸다'를 지키기 위해 외로운 싸움을 이어간다. 한편, 비브라늄의 패권을 둘러싼 미스터리한 음모와 함께 깊은 해저에서 모습을 드러낸 최강의 적 '네이머'와 '탈로칸'의 전사들은 '와칸다'를 향해 무차별 공격을 퍼붓기 시작하는데…`, date: '2022.11.09', director: '라이언 쿠글러', actor: `레티티아 라이트, 디나이 구리라, 루피타 뇽, 테노치 우에르타 메히아`},
                {img: '/dashboard/section_2/antman3.jpg', title: '앤트맨과 와스프: 퀀텀매니아', desc: `슈퍼히어로 파트너인 '스캇 랭'(폴 러드)과 '호프 반 다인'(에반젤린 릴리), 호프의 부모 '재닛 반 다인'(미셸 파이퍼)과 '행크 핌'(마이클 더글라스), 그리고 스캇의 딸 '캐시 랭'(캐서린 뉴튼)까지 미지의 ‘양자 영역’ 세계 속에 빠져버린 ‘앤트맨 패밀리’. 그 곳에서 새로운 존재들과 무한한 우주를 다스리는 정복자 '캉'을 만나며, 그 누구도 예상 못 한 모든 것의 한계를 뛰어넘는 모험을 시작하게 되는데… 2023년 첫 번째 마블 블록버스터 2월, 무한한 우주의 정복자가 깨어난다!`, date: '2023.02.15', director: '페이튼 리드', actor: `폴 러드, 에반젤린 릴리, 조나단 메이저스, 캐서린 뉴튼, 미셸 파이러, 마이클 더글라스`},
                {img: '/dashboard/section_2/guardians3.jpg', title: '가디언즈 오브 갤럭시 Vol.3', desc: `‘가모라’를 잃고 슬픔에 빠져 있던 ‘피터 퀼’이 위기에 처한 은하계와 동료를 지키기 위해 다시 한번 가디언즈 팀과 힘을 모으고, 성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기`, date: '2023.05.03', director: '제임스 건', actor: `크리스 프랫, 조 샐다나, 데이브 바티스타, 빈 디젤, 브래들리 쿠퍼`},
                {img: '/dashboard/section_2/themarvels.jpg', title: '더 마블스', desc: `강력한 힘으로 은하계를 수호하는 최강 히어로 캡틴 마블 ‘캐럴 댄버스’ 캡틴 마블의 오랜 친구의 딸이자, 빛의 파장을 조작하는 히어로 ‘모니카 램보’ 최애 히어로 캡틴 마블의 열렬한 팬인 미즈 마블 ‘카말라 칸’ 캡틴 마블에 대한 복수를 꿈꾸는 냉혹한 크리족 리더 ‘다르-벤’의 영향으로 세 명의 히어로는 능력을 사용할 때마다 서로의 위치가 뒤바뀌게 된다. 뜻하지 않게 우주와 지구를 넘나들게 되는 예측 불가하고 통제 불가한 상황 속, ‘다르-벤’은 지구를 포함해 캡틴 마블이 고향이라고 부르는 수많은 행성을 모두 파멸시키려 하고, 이를 저지하기 위해 모인 팀 ‘마블스’는 하나로 힘을 모으는데… 함께, 더 높이! 더 멀리! 더 빨리! 역대급 파장을 일으킬 마블의 NEW 팀업이 시작된다!`, date: '2023.11.08', director: '니아 다코스타', actor: `브리 라슨, 테요나 패리스, 이만 벨라니, 자웨 애쉬튼, 사무엘 L.잭슨, 박서준`},
            ]
        }];
    });

    mock.onGet("/dashboard/section3").reply(() => {
        return [200, {
            data: {
                quickMenu : [
                    {title: "New Introduction", content: "새로운 작품을 만나보세요", img:"/dashboard/section_3/disney.jpg", alt:"section_3_disney"},
                    {title: "Hero", content: "마블의 주요 영웅들을 만나보세요", img:"/dashboard/section_3/ironman.jpg", alt:"section_3_ironman"},
                    {title: "Marvel Cinematic", content: "마블 시네마틱 유니버스를 만나보세요", img:"/dashboard/section_3/marvel_cinematic_universe.jfif", alt:"section_3_marvel_cinematic_universe"},
                    {title: "Villain", content: "마블의 주요 빌런들을 만나보세요", img:"/dashboard/section_3/thanos.jpg", alt:"section_3_thanos"},
                ],
                enjoy : [
                    {title: "MARVEL GAME", content: "박친감 넘치는 게임에 참여해보세요", img:"/dashboard/section_3/marvel_game1.png", alt:"section_3_marvel_game1"},
                    {title: "MARVEL COMICS", content: `미국의 코믹스 회사이며 슈퍼히어로물을 주로 출판하고 있으며
DC 코믹스와 함께 미국 만화 산업계의 양대산맥을 이루고 있습니다`, img:"/dashboard/section_3/marvel_comics.jpg", alt:"section_3_marvel_comics"},
                ]
            }
        }];
    });

    mock.onGet("/dashboard/section4").reply(() => {
        return [200, {
            data: [
                {img: '/dashboard/section_4/news_movie.png', title: 'MOVIES', desc: `'Black Panther: Wakanda Forever' 레드카펫 프리미어 라이브 스트리밍 보기`},
                {img: '/dashboard/section_4/news_comics.jpg', title: 'COMICS', desc: `'Avengers Assemble' 예고편, 모든 시간과 공간에서 가장 강력한 영웅들이 모여 존재하는 모든 것의 끝을 마주하다`},
                {img: '/dashboard/section_4/news_tvshow.jpg', title: 'TV SHOWS', desc: `‘She-Hulk’: 찰리 콕스가 맷 머독과 데어데블의 귀환을 말하다`},
                {img: '/dashboard/section_4/news_game.jpg', title: 'GAMES', desc: `MARVEL 퍼즐 맞추기 퀘스트: 아케이드 (에드워드 아크라)와 아케이드 (PWN의 왕)`},
                {img: '/dashboard/section_4/news_digitalseries.jpg', title: 'DIGITAL SERIES', desc: `마블과 부상당한 전사 프로젝트 팀, '마블 메이크 미 어 히어로'`},
                {img: '/dashboard/section_4/news_culture.jpg', title: 'CULTURE & LIFESTYLE', desc: `NBA와 마블 스튜디오, '블랙 팬서: 와칸다 포에버' 앞두고 공동 프로모션 캠페인 시작`},
                {img: '/dashboard/section_4/news_podcasts.jpg', title: 'PODCASTS', desc: `황무지로 돌아갈 시간입니다! '마블 웨이스트랜더스: 둠' 출시`},
                {img: '/dashboard/section_4/news_game2.jpg', title: 'GAMES', desc: `MARVEL SNAP, 모바일과 PC로 전 세계 출시`},
            ]
        }];
    });

    mock.onGet("/dashboard/footer").reply(() => {
        return [200, {
            data: [
                {label: 'follow us on Facebook, opens a new window', href: 'http://facebook.com/marvel', path: `M9.426 17.647H.974A.974.974 0 010 16.673V.974C0 .436.436 0 .974 0h15.7c.537 0 .973.436.973.974v15.699a.974.974 0 01-.974.974h-4.497v-6.834h2.294l.343-2.663h-2.637v-1.7c0-.772.214-1.297 1.32-1.297h1.41V2.77a18.853 18.853 0 00-2.055-.105c-2.033 0-3.425 1.241-3.425 3.52V8.15h-2.3v2.663h2.3v6.834z`},
                {label: 'follow us on Twitter, opens a new window', href: 'http://twitter.com/marvel', path: `M3.5 5.1l3.8 5L4 13.6c-1.9 1.8-3.1 3.6-2.8 3.9.3.3 1.7-.8 3.1-2.5 3.2-3.8 4.1-3.8 6.4 0 1.3 2.2 2.5 3 4.5 3H18l-3.6-5-3.7-5.1L13.9 4c1.8-2.2 2.8-4 2.3-4-.4 0-1.8 1.3-3 3-1.3 1.6-2.6 3-3 3-.4 0-1.6-1.4-2.7-3C6.1.9 4.7 0 2.7 0H-.2l3.7 5.1zm6.3 3.3c5.3 7.6 5.8 8.6 4.4 8.6C13.4 17 3 2.7 3 1.6c0-2 2.3.3 6.8 6.8z`},
                {label: 'follow us on Instagram, opens a new window', href: 'http://instagram.com/marvel', path: `M15.441 15.993H2.206a.552.552 0 01-.552-.552V7.17H3.86c-.287.414-.384 1.185-.384 1.675 0 2.953 2.408 5.356 5.368 5.356 2.96 0 5.368-2.403 5.368-5.356 0-.49-.069-1.25-.425-1.675h2.206v8.272a.552.552 0 01-.552.552M8.844 5.458a3.39 3.39 0 013.394 3.386 3.39 3.39 0 01-3.394 3.386A3.39 3.39 0 015.45 8.844a3.39 3.39 0 013.393-3.386m4.391-3.252h1.655c.304 0 .551.247.551.551v1.655a.552.552 0 01-.551.551h-1.655a.552.552 0 01-.551-.551V2.757c0-.304.247-.551.551-.551M15.55 0H2.098A2.095 2.095 0 000 2.093v13.461c0 1.156.94 2.093 2.098 2.093h13.451a2.095 2.095 0 002.098-2.093V2.093C17.647.937 16.707 0 15.549 0`},
                {label: 'follow us on Tumblr, opens a new window', href: 'http://marvelentertainment.tumblr.com', path: `M8.535 14.5c-1.532.038-1.83-1-1.842-1.751V7.217h3.844v-2.69h-3.83V0H3.904a.147.147 0 00-.138.133C3.602 1.518 2.904 3.949 0 4.922v2.295h1.937v5.806c0 1.988 1.58 4.812 5.749 4.745 1.407-.022 2.969-.569 3.314-1.04l-.92-2.535c-.356.158-1.037.295-1.545.307z`},
                {label: 'follow us on Youtube, opens a new window', href: 'http://youtube.com/marvel', path: `M8.109 9.73l-.001-5.679 5.522 2.85-5.521 2.83zm12.124-6.663s-.2-1.393-.812-2.006c-.778-.806-1.649-.81-2.048-.856C14.513 0 10.223 0 10.223 0h-.009s-4.29 0-7.15.205c-.4.046-1.27.05-2.048.856-.612.613-.812 2.006-.812 2.006S0 4.703 0 6.338v1.534c0 1.636.204 3.272.204 3.272s.2 1.392.812 2.006c.778.805 1.8.78 2.254.864 1.635.155 6.949.203 6.949.203s4.294-.006 7.154-.21c.4-.048 1.27-.052 2.048-.857.612-.614.812-2.006.812-2.006s.204-1.636.204-3.272V6.338c0-1.635-.204-3.271-.204-3.271z`},
                {label: 'follow us on Snapchat, opens a new window', href: 'https://www.snapchat.com/add/marvel', path: `M9.155.003C8.74.003 7.91.057 7.02.421c-.51.207-.968.488-1.363.834-.47.412-.853.92-1.138 1.51-.418.865-.319 2.322-.24 3.492.01.127.018.258.027.385a.784.784 0 01-.307.054c-.236 0-.516-.07-.833-.207a.798.798 0 00-.317-.06c-.188 0-.387.051-.56.145-.216.117-.356.283-.394.468-.025.121-.024.362.266.607.16.134.393.258.696.369.079.028.173.056.273.085.346.102.87.255 1.006.552.07.15.04.348-.088.587a5.67 5.67 0 01-.95 1.368c-.347.374-.73.686-1.136.928a4.386 4.386 0 01-1.594.575c-.221.033-.379.215-.366.421a.5.5 0 00.045.176c.09.194.297.358.633.502.411.176 1.026.325 1.827.44.04.072.083.25.112.373.03.13.062.264.107.406.05.153.176.337.502.337.123 0 .265-.025.43-.055.24-.043.569-.103.98-.103.227 0 .463.019.7.055.459.07.853.328 1.31.626.669.436 1.425.93 2.582.93.031 0 .063 0 .094-.003.038.002.085.003.135.003 1.157 0 1.913-.494 2.581-.93.458-.299.852-.556 1.31-.626.238-.036.473-.055.701-.055.393 0 .703.046.98.096.182.033.322.049.43.049.26 0 .435-.12.502-.332.044-.139.076-.27.107-.402.027-.114.07-.298.111-.37.802-.116 1.417-.264 1.828-.44.335-.144.542-.308.632-.5a.485.485 0 00.046-.177c.013-.206-.145-.388-.366-.422-2.498-.38-3.624-2.75-3.67-2.85-.138-.26-.167-.457-.098-.608.136-.296.66-.45 1.006-.551.1-.03.195-.057.273-.086.341-.124.585-.259.746-.412.192-.182.229-.357.227-.472-.006-.277-.236-.523-.6-.643a1.151 1.151 0 00-.407-.072.976.976 0 00-.378.071 2.267 2.267 0 01-.779.205.753.753 0 01-.258-.052l.023-.335.003-.05c.08-1.17.18-2.628-.238-3.493a4.731 4.731 0 00-1.144-1.515A4.822 4.822 0 0011.66.415 5.836 5.836 0 009.523 0l-.368.003z`},
                {label: 'follow us on Pinterest, opens a new window', href: 'https://www.pinterest.com/marvelofficial', path: `M0 8c0 3.275 2.216 6.09 5.388 7.327-.025-.558-.004-1.23.156-1.837l1.158-4.359s-.287-.51-.287-1.266c0-1.185.774-2.07 1.736-2.07.818 0 1.214.546 1.214 1.2 0 .732-.525 1.826-.795 2.84-.226.849.478 1.54 1.42 1.54 1.705 0 2.854-1.946 2.854-4.253 0-1.753-1.329-3.065-3.745-3.065-2.73 0-4.43 1.809-4.43 3.83 0 .698.23 1.189.592 1.569.167.176.19.245.13.447-.043.146-.142.501-.184.641-.06.203-.244.276-.45.2-1.258-.456-1.843-1.68-1.843-3.056 0-2.272 2.156-4.998 6.432-4.998 3.436 0 5.698 2.212 5.698 4.583 0 3.139-1.962 5.483-4.857 5.483-.97 0-1.885-.466-2.198-.996 0 0-.523 1.843-.633 2.198-.19.617-.564 1.234-.906 1.714.81.212 1.665.328 2.55.328 4.97 0 9-3.582 9-8s-4.03-8-9-8-9 3.582-9 8z`},
                {label: 'follow us on Tiktok, opens a new window', href: 'https://www.tiktok.com/@marvel', path: `M14.5 3.7c-.9-.6-1.6-1.6-1.9-2.7V.2H9.5v12c0 1.4-1.1 2.4-2.5 2.4-.5 0-.8-.2-1.1-.3-.8-.3-1.4-1.1-1.4-2.1 0-1.4 1.3-2.5 2.5-2.5.3 0 .5 0 .8.2V6.7H7c-3 0-5.5 2.5-5.5 5.5 0 1.9.9 3.5 2.4 4.6.9.6 2.1.9 3.2.9 3 0 5.5-2.5 5.5-5.5V6.1c1.1.8 2.7 1.4 4.1 1.4v-3c-.8 0-1.5-.3-2.2-.8z`},
            ]
        }];
    });

    mock.onGet("/sub/game/section1").reply(() => {
        return [200, {
            data: [
                {img: '/sub/game/section_1/game1.jpg', title: `Marvel Rivals`, date: ``, alt: 'game1'},
                {img: '/sub/game/section_1/game2.jpg', title: `Marvel's Blade`, date: ``, alt: 'game2'},
                {img: '/sub/game/section_1/game3.jpg', title: `Marvel 1943: Rise of Hydra`, date: `2025`, alt: 'game3'},
                {img: '/sub/game/section_1/game4.jpg', title: `MARVEL vs. CAPCOM Fighting Collection: Arcade Classics`, date: `2024`, alt: 'game4'},
                {img: '/sub/game/section_1/game5.jpg', title: `Marvel's Spider-Man 2`, date: `2023`, alt: 'game5'},
                {img: '/sub/game/section_1/game6.jpg', title: `MARVEL SNAP`, date: `2022`, alt: 'game6'},
            ]
        }];
    });

    mock.onGet("/sub/game/section2").reply(() => {
        return [200, {
            data: [
                {img: '/sub/game/section_2/game1.jpg', title: `Marvel's Wolverine`, alt: 'game1'},
                {img: '/sub/game/section_2/game2.jpg', title: `Marvel's Blade`, alt: 'game2'},
                {img: '/sub/game/section_2/game3.jpg', title: `Marvel Rivals`, alt: 'game3'},
                {img: '/sub/game/section_2/game4.jpg', title: `Marvel 1943: Rise of Hydra`, alt: 'game4'},
                {img: '/sub/game/section_2/game5.jpg', title: `Marvel's Wolverine`, alt: 'game5'},
                {img: '/sub/game/section_2/game6.jpg', title: `Marvel's Spider-Man 2`, alt: 'game6'},
                {img: '/sub/game/section_2/game7.jpg', title: `Marvel's Midnight Suns`, alt: 'game7'},
                {img: '/sub/game/section_2/game8.jpg', title: `MARVEL SNAP`, alt: 'game8'},
                {img: '/sub/game/section_2/game9.jpg', title: `Marvel's Guardians of the Galaxy`, alt: 'game9'},
                {img: '/sub/game/section_2/game10.jpg', title: `MARVEL Future Revolution`, alt: 'game10'},
                {img: '/sub/game/section_2/game11.jpg', title: `Fortnite`, alt: 'game11'},
                {img: '/sub/game/section_2/game12.jpg', title: `Marvel's Spider-Man: Miles Morales`, alt: 'game12'},
                {img: '/sub/game/section_2/game13.jpg', title: `Marvel's Avengers`, alt: 'game13'},
                {img: '/sub/game/section_2/game14.jpg', title: `Marvel's Iron Man VR`, alt: 'game14'},
                {img: '/sub/game/section_2/game15.jpg', title: `LEGO Marvel Colletion Bundle`, alt: 'game15'},
                {img: '/sub/game/section_2/game16.jpg', title: `Marvel Ultimate Alliance 3: The Black Order`, alt: 'game16'},
                {img: '/sub/game/section_2/game17.jpg', title: `Marvel's Spider-Man`, alt: 'game17'},
                {img: '/sub/game/section_2/game18.jpg', title: `MARVEL Powers United VR`, alt: 'game18'},
                {img: '/sub/game/section_2/game19.jpg', title: `Marvel Contest of Champions`, alt: 'game19'},
                {img: '/sub/game/section_2/game20.jpg', title: `MARVEL Future Fight`, alt: 'game20'},
                {img: '/sub/game/section_2/game21.jpg', title: `Marvel Strike Force`, alt: 'game21'},
                {img: '/sub/game/section_2/game22.jpg', title: `MARVEL Puzzle Quest`, alt: 'game22'},
                {img: '/sub/game/section_2/game23.jpg', title: `Marvel vs. Capcom: Infinite`, alt: 'game23'},
                {img: '/sub/game/section_2/game24.jpg', title: `Marvel's Guardians of the Galaxy: The Telltale Series`, alt: 'game24'},
                {img: '/sub/game/section_2/game25.jpg', title: `Marvel Pinball`, alt: 'game25'},
            ]
        }];
    });

    mock.onGet("/sub/toy/sideMenu").reply(() => {
        return [200, {
            data: [
                {
                    menu: 'Category',
                    child: [
                        {title: 'Toys'},
                        {title: 'Toys by Age'},
                        {title: 'Collectibles'},
                    ]
                },
                {
                    menu: 'Product Type',
                    child: [
                        {title: 'Action Figures'},
                        {title: 'Arts & Crafts'},
                        {title: 'Bath Toys'},
                        {title: 'Books'},
                        {title: 'Bubble Wand'},
                        {title: 'Canvas Art'},
                        {title: 'Cars & Trains'},
                        {title: 'Collectible Keys'},
                        {title: 'Collectibles'},
                        {title: 'Costumes'},
                        {title: 'Costume Accessories'},
                    ]
                },
                {
                    menu: 'Gender',
                    child: [
                        {title: 'Boys'},
                        {title: 'Girls'},
                        {title: 'Men'},
                        {title: 'Women'},
                    ]
                },
                {
                    menu: 'Age',
                    child: [
                        {title: 'Adults'},
                        {title: 'Baby'},
                        {title: 'Kids'},
                    ]
                }
            ]
        }];
    });

    mock.onGet("/sub/toy/product").reply(() => {
        return [200, {
            data: [
                {label: 'BLACK FRIDAY BEAL', title: `Buzz Lightyear Interactive Talking Action Figure - Toy Story - 12''`, price: '$32.95', discount: '$28.00', defaultImg: '/sub/toy/section_2/toy1.jfif', changeImg: '/sub/toy/section_2/toy2.jfif', defaultAlt: 'toy1', changeAlt: 'toy2'},
                {label: 'BLACK FRIDAY BEAL', title: `Chewbacca Talking Action Figure - Star Wars`, price: '$29.99', discount: '$22.00', defaultImg: '/sub/toy/section_2/toy3.jfif', changeImg: '/sub/toy/section_2/toy4.jfif', defaultAlt: 'toy3', changeAlt: 'toy4'},
                {label: 'BLACK FRIDAY BEAL', title: `Cinderella Classic Doll Deluxe Gift Set`, price: '$79.99', discount: '$69.99', defaultImg: '/sub/toy/section_2/toy5.jfif', changeImg: '/sub/toy/section_2/toy6.jfif', defaultAlt: 'toy5', changeAlt: 'toy6'},
                {label: 'BLACK FRIDAY BEAL', title: `Disney Classic Doll Collection Gift Set - 11 1/2''`, price: '$129.99', discount: '$119.99', defaultImg: '/sub/toy/section_2/toy7.jfif', changeImg: '/sub/toy/section_2/toy8.jfif', defaultAlt: 'toy7', changeAlt: 'toy8'},
                {label: 'BLACK FRIDAY BEAL', title: `Arendelle Castel Playset - Frozen 2`, price: '$139.95', discount: '$129.95', defaultImg: '/sub/toy/section_2/toy9.jfif', changeImg: '/sub/toy/section_2/toy10.jfif', defaultAlt: 'toy9', changeAlt: 'toy10'},
                {label: 'BLACK FRIDAY BEAL', title: `Spider-Man Acetion Figure Set - Marvel Toybox`, price: '49.99', discount: '$39.99', defaultImg: '/sub/toy/section_2/toy11.jfif', changeImg: '/sub/toy/section_2/toy12.jfif', defaultAlt: 'toy11', changeAlt: 'toy12'},
                {label: 'BLACK FRIDAY BEAL', title: `Mack Carrier Stunt Race Playset - Cars`, price: '$79.99', discount: '$69.99', defaultImg: '/sub/toy/section_2/toy13.jfif', changeImg: '/sub/toy/section_2/toy14.jfif', defaultAlt: 'toy13', changeAlt: 'toy14'},
                {label: 'BLACK FRIDAY BEAL', title: `Doctor Strange Talking Action Figure`, price: '$29.99', discount: '$22.00', defaultImg: '/sub/toy/section_2/toy15.jfif', changeImg: '/sub/toy/section_2/toy16.jfif', defaultAlt: 'toy15', changeAlt: 'toy16'},
            ]
        }];
    });

export default mock;
