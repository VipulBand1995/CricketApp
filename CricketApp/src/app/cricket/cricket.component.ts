import { Component, OnInit } from '@angular/core';
import {CricketService} from '../cricket.service';
import {TblTeamName} from '../../Models/TblTeamName.model';
import {TblPlayerProfile} from '../../Models/TblPlayerProfile.model';
import {TblVenue} from '../../Models/TblVenue.model';
import {TblMatchDetails} from '../../Models/TblMatchDetails.model';
import { TblScoreDetails} from '../../Models/T_Score.model';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styles: [
  ]
})
export class CricketComponent implements OnInit {

  countries: TblTeamName[];
  FilterCountries: TblTeamName[];
  players: TblPlayerProfile[];
  matches: TblMatchDetails[];
  venues: TblVenue[];
  scoreCard: TblScoreDetails[];
  FilterCountry = [];

  CountryHeaderList = [
    { DisplayName: 'Countries', BindingValue: 'team_Name' }
  ];

  TeamHeaderList = [
    { DisplayName: 'Teams', BindingValue: 'team_Name' },
    { DisplayName: 'Team Description', BindingValue: 'team_Description'}
  ];

  PlayerHeaderList = [
    { DisplayName: 'Player Name', BindingValue: 'name' },
    { DisplayName: 'Age', BindingValue: 'age'},
    { DisplayName: 'Team', BindingValue: 'team' },
    { DisplayName: 'Player Role', BindingValue: 'p_Role' },
    { DisplayName: 'Style', BindingValue: 'r_Role'}
  ];

  VenuesHeaderList = [
    { DisplayName: 'Venue Name', BindingValue: 'venue_name' },
    { DisplayName: 'City', BindingValue: 'venue_city'},
    { DisplayName: 'Audience', BindingValue: 'audience' }
  ];

  MatchesHeaderList = [
    { DisplayName: 'Matches', BindingValue: 'team_Name' },
    { DisplayName: 'Winner', BindingValue: 'winner_Id'},
    { DisplayName: 'Looser', BindingValue: 'looser_Id' },
    { DisplayName: 'Man of the Match', BindingValue: 'man_Match_Id' },
    { DisplayName: 'Bowler of the Match', BindingValue: 'bowler_Match_Id' },
    { DisplayName: 'Fielder of the Match', BindingValue: 'best_Fielder_Id' }
  ];

  ScorecardHeaderList = [
    { DisplayName: 'Team', BindingValue: 'team_Name' },
    { DisplayName: 'Matches Played', BindingValue: 'matches'},
    { DisplayName: 'Won', BindingValue: 'won'},
    { DisplayName: 'Lost', BindingValue: 'lost'},
    { DisplayName: 'NR', BindingValue: 'tied'},
    { DisplayName: 'Points', BindingValue: 'pts'}
  ];

  constructor(private cricketService: CricketService) { }

  ngOnInit(): void {
    this.GetCountries();
    this.GetPlayers();
    this.GetVenue();
    this.GetMatchResults();
    this.GetScorecard();
  }
  
  GetCountries() {
    this.cricketService.GetCountries().subscribe((result: TblTeamName[]) => {
      this.countries = result;
      console.log('hello',this.countries);
      this.FilterCountries = result;
    });
  }

  GetPlayers() {
    this.cricketService.GetPlayers().subscribe((result: TblPlayerProfile[]) => {
      this.players = result;
      console.log('hello',this.players);
    });
  }

  GetVenue() {
    this.cricketService.GetVenue().subscribe((result: TblVenue[]) => {
      this.venues = result;
      console.log('hello',this.venues);
    });
  }

  GetMatchResults() {
    this.cricketService.GetMatchResults().subscribe((result: TblMatchDetails[]) => {
      this.matches = result;
      console.log('hello',this.matches);
    });
  }

  GetScorecard() {
    this.cricketService.GetScorecard().subscribe((result: TblScoreDetails[]) => {
      this.scoreCard = result;
      console.log('hello',this.scoreCard);
    });
  }
}
