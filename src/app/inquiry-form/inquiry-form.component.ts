import { Component, OnInit } from '@angular/core';
import { InquirySaldoService } from '../services/inquiry-saldo.service';
import { HttpHeaders } from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.css']
})
export class InquiryFormComponent implements OnInit {

  accountNumber: String;

  constructor(private service: InquirySaldoService) { }

  ngOnInit(): void {
  }

  //variable declarations
  CustomerName: string;//
  CurrencyCode: string;//
  BranchCode: string;//
  LegderBalance: string;//
  AccountType: string;//
  Officers: string;//
  CurrentBalance: string;// 
  AvailableBalance: string;//
  StatementCycle: string;
  OverdraftCode: string;
  OverdraftLimit: string;
  StopIndicator: string;
  HoldsIndicator: string;
  SavingTransferCode: string;
  DormantIndicator: string;
  CloseBalance: string;
  OnlineLiveAmount: string;
  OpenIndicator: string;
  OnlineMemo: string;
  Activity: string;//
  PostIndicator: string;
  TotalAmount: string;
  TDLevel: string;
  InterestCycle: string;
  PraIndicator: string;
  FloatEnteredOnline: string;
  CollectionDisbursmentIndicator: string;
  OnlineFloatYesterday: string;//
  FloatAmount: string;//
  OverDraftPlan: string;//
  OnlineFloat: string;
  DeferredIncomeIndicator: string;
  LastActive: string;//
  OpeningDate: string;//
  Penalty: string;//
  MiscellaneousStatus: string;
  PassbookIndicator: string;
  OverDraftChangeCycle: string;
  Page: string;
  InterestPaidYearToDate: string;//
  Line: string;//
  UserCode: string;//
  OverDraftInterestAccount: string;
  CostCenter: string;
  PassbookAmount: string;
  TaxClose: string;//
  UnpostedBookNumber: string;
  AccruedInterest: string;//
  CombineStatementIndicator: string;//
  OnlineFloatTomorrow: string;
  AnalysisCycle: string;
  PassbookSerialNumber: string;//
  AccrualAmount: string;//
  DepositCategory: string;
  Message: string;

  public getData() {

    let body = `<env:Envelope xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:inp="http://esb.bca.com/BalanceDetail/input_BalanceDetail" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:env="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <env:Header/>
    <env:Body>
       <inp:BalanceDetailRequest>
          <ClientID>F518824D0A1520C501764BE1B733E071</ClientID>
          <ChannelID>BDS</ChannelID>
          <Operation>02</Operation>
          <AccountNumber>`+ this.accountNumber + `</AccountNumber>
          <UserID>015T</UserID>
       </inp:BalanceDetailRequest>
    </env:Body>
 </env:Envelope> `;

    let parser = new DOMParser();

    console.log(body);
    let res = this.service.getData(body);
    res.subscribe((data) => {

      //parsing string to xml
      let cooked = parser.parseFromString(data, "text/xml");

      //displaying xml nodes tag list
      let outputSchema = cooked.getElementsByTagName("OutputSchema");
      // outputSchema[0].childNodes.forEach(node => console.log(node.nodeName));

      //populating variables
      this.CustomerName = outputSchema[0].getElementsByTagName("CustomerName")[0].childNodes[0] === undefined? "":outputSchema[0].getElementsByTagName("CustomerName")[0].childNodes[0].nodeValue ;
      this.CurrencyCode = outputSchema[0].getElementsByTagName("CurrencyCode")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("CurrencyCode")[0].childNodes[0].nodeValue ;
      this.BranchCode = outputSchema[0].getElementsByTagName("BranchCode")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("BranchCode")[0].childNodes[0].nodeValue ;
      this.LegderBalance = outputSchema[0].getElementsByTagName("LegderBalance")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("LegderBalance")[0].childNodes[0].nodeValue ;
      this.AccountType = outputSchema[0].getElementsByTagName("AccountType")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("AccountType")[0].childNodes[0].nodeValue ;
      this.Officers = outputSchema[0].getElementsByTagName("Officers")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("Officers")[0].childNodes[0].nodeValue ;
      this.CurrentBalance = outputSchema[0].getElementsByTagName("CurrentBalance")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("CurrentBalance")[0].childNodes[0].nodeValue ;
      this.AvailableBalance = outputSchema[0].getElementsByTagName("AvailableBalance")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("AvailableBalance")[0].childNodes[0].nodeValue ;
      this.StatementCycle = outputSchema[0].getElementsByTagName("StatementCycle")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("StatementCycle")[0].childNodes[0].nodeValue ;
      this.OverdraftCode = outputSchema[0].getElementsByTagName("OverdraftCode")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OverdraftCode")[0].childNodes[0].nodeValue ;
      this.OverdraftLimit = outputSchema[0].getElementsByTagName("OverdraftLimit")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OverdraftLimit")[0].childNodes[0].nodeValue ;
      this.StopIndicator = outputSchema[0].getElementsByTagName("StopIndicator")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("StopIndicator")[0].childNodes[0].nodeValue ;
      this.HoldsIndicator = outputSchema[0].getElementsByTagName("HoldsIndicator")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("HoldsIndicator")[0].childNodes[0].nodeValue ;
      this.SavingTransferCode = outputSchema[0].getElementsByTagName("SavingTransferCode")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("SavingTransferCode")[0].childNodes[0].nodeValue ;
      this.DormantIndicator = outputSchema[0].getElementsByTagName("DormantIndicator")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("DormantIndicator")[0].childNodes[0].nodeValue ;
      this.CloseBalance = outputSchema[0].getElementsByTagName("CloseBalance")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("CloseBalance")[0].childNodes[0].nodeValue ;
      this.OnlineLiveAmount = outputSchema[0].getElementsByTagName("OnlineLiveAmount")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OnlineLiveAmount")[0].childNodes[0].nodeValue ;
      this.OpenIndicator = outputSchema[0].getElementsByTagName("OpenIndicator")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OpenIndicator")[0].childNodes[0].nodeValue ;
      this.OnlineMemo = outputSchema[0].getElementsByTagName("OnlineMemo")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OnlineMemo")[0].childNodes[0].nodeValue ;
      this.Activity = outputSchema[0].getElementsByTagName("Activity")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("Activity")[0].childNodes[0].nodeValue ;
      this.PostIndicator = outputSchema[0].getElementsByTagName("PostIndicator")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("PostIndicator")[0].childNodes[0].nodeValue ;
      this.TotalAmount = outputSchema[0].getElementsByTagName("TotalAmount")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("TotalAmount")[0].childNodes[0].nodeValue ;
      this.TDLevel = outputSchema[0].getElementsByTagName("TDLevel")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("TDLevel")[0].childNodes[0].nodeValue ;
      this.InterestCycle = outputSchema[0].getElementsByTagName("InterestCycle")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("InterestCycle")[0].childNodes[0].nodeValue ;
      this.PraIndicator = outputSchema[0].getElementsByTagName("PraIndicator")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("PraIndicator")[0].childNodes[0].nodeValue ;
      this.FloatEnteredOnline = outputSchema[0].getElementsByTagName("FloatEnteredOnline")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("FloatEnteredOnline")[0].childNodes[0].nodeValue ;
      this.CollectionDisbursmentIndicator = outputSchema[0].getElementsByTagName("CollectionDisbursmentIndicator")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("CollectionDisbursmentIndicator")[0].childNodes[0].nodeValue ;
      this.OnlineFloatYesterday = outputSchema[0].getElementsByTagName("OnlineFloatYesterday")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OnlineFloatYesterday")[0].childNodes[0].nodeValue ;
      this.FloatAmount= outputSchema[0].getElementsByTagName("FloatAmount")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("FloatAmount")[0].childNodes[0].nodeValue ;
      this.OverDraftPlan= outputSchema[0].getElementsByTagName("OverDraftPlan")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OverDraftPlan")[0].childNodes[0].nodeValue ;
      this.OnlineFloat= outputSchema[0].getElementsByTagName("OnlineFloat")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OnlineFloat")[0].childNodes[0].nodeValue ;;
      this.DeferredIncomeIndicator= outputSchema[0].getElementsByTagName("DeferredIncomeIndicator")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("DeferredIncomeIndicator")[0].childNodes[0].nodeValue ;
      this.LastActive= outputSchema[0].getElementsByTagName("LastActive")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("LastActive")[0].childNodes[0].nodeValue ;
      this.OpeningDate= outputSchema[0].getElementsByTagName("OpeningDate")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OpeningDate")[0].childNodes[0].nodeValue ;
      this.Penalty= outputSchema[0].getElementsByTagName("Penalty")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("Penalty")[0].childNodes[0].nodeValue ;
      this.MiscellaneousStatus= outputSchema[0].getElementsByTagName("MiscellaneousStatus")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("MiscellaneousStatus")[0].childNodes[0].nodeValue ;
      this.PassbookIndicator= outputSchema[0].getElementsByTagName("PassbookIndicator")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("PassbookIndicator")[0].childNodes[0].nodeValue ;
      this.OverDraftChangeCycle= outputSchema[0].getElementsByTagName("OverDraftChangeCycle")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OverDraftChangeCycle")[0].childNodes[0].nodeValue ;
      this.Page= outputSchema[0].getElementsByTagName("Page")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("Page")[0].childNodes[0].nodeValue ;
      this.InterestPaidYearToDate= outputSchema[0].getElementsByTagName("InterestPaidYearToDate")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("InterestPaidYearToDate")[0].childNodes[0].nodeValue ;
      this.Line= outputSchema[0].getElementsByTagName("Line")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("Line")[0].childNodes[0].nodeValue ;
      this.UserCode= outputSchema[0].getElementsByTagName("UserCode")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("UserCode")[0].childNodes[0].nodeValue ;
      this.OverDraftInterestAccount= outputSchema[0].getElementsByTagName("OverDraftInterestAccount")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OverDraftInterestAccount")[0].childNodes[0].nodeValue ;
      this.CostCenter= outputSchema[0].getElementsByTagName("CostCenter")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("CostCenter")[0].childNodes[0].nodeValue ;
      this.PassbookAmount= outputSchema[0].getElementsByTagName("PassbookAmount")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("PassbookAmount")[0].childNodes[0].nodeValue ;
      this.TaxClose= outputSchema[0].getElementsByTagName("TaxClose")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("TaxClose")[0].childNodes[0].nodeValue ;
      this.UnpostedBookNumber= outputSchema[0].getElementsByTagName("UnpostedBookNumber")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("UnpostedBookNumber")[0].childNodes[0].nodeValue ;
      this.AccruedInterest= outputSchema[0].getElementsByTagName("AccruedInterest")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("AccruedInterest")[0].childNodes[0].nodeValue ;
      this.CombineStatementIndicator= outputSchema[0].getElementsByTagName("CombineStatementIndicator")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("CombineStatementIndicator")[0].childNodes[0].nodeValue ;
      this.OnlineFloatTomorrow= outputSchema[0].getElementsByTagName("OnlineFloatTomorrow")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("OnlineFloatTomorrow")[0].childNodes[0].nodeValue ;
      this.AnalysisCycle= outputSchema[0].getElementsByTagName("AnalysisCycle")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("AnalysisCycle")[0].childNodes[0].nodeValue ;
      this.PassbookSerialNumber= outputSchema[0].getElementsByTagName("PassbookSerialNumber")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("PassbookSerialNumber")[0].childNodes[0].nodeValue ;
      this.AccrualAmount= outputSchema[0].getElementsByTagName("AccrualAmount")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("AccrualAmount")[0].childNodes[0].nodeValue ;
      this.DepositCategory = outputSchema[0].getElementsByTagName("DepositCategory")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("DepositCategory")[0].childNodes[0].nodeValue ;
      this.Message= outputSchema[0].getElementsByTagName("Message")[0].childNodes[0]=== undefined? "":outputSchema[0].getElementsByTagName("Message")[0].childNodes[0].nodeValue ;
      
      let button = document.getElementById("btn-cetak");
      button.removeAttribute("disabled");
    });
  }

  public cetak(){
    window.print();
  }

}
